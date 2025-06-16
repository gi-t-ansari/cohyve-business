import React, { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCompanyPassword } from "../../features/userSlice";
// image
import circleLogo from "../../assets/images/circleLogo.svg";

import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../loader/Loader";
import { useLocation } from "react-router-dom";

const initialPasswordRules = [
  {
    rule: "At least 6 characters needed",
    test: (password) => password.length >= 6,
  },
  {
    rule: "At least 1 special character needed",
    test: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
  { rule: "At least 1 number needed", test: (password) => /\d/.test(password) },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [inputFlag, setInputFlag] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rulesStatus, setRulesStatus] = useState(
    initialPasswordRules.map(() => false)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(true);
  const query = useQuery();
  const emailFromQuery = query.get("email"); // Get email from the URL
  const [email, setEmail] = useState(emailFromQuery || "");
  console.log(email);

  // Redux state
  //const email = useSelector((state) => state.user.email); // Get email from Redux store
  // const email = "shreyas11@cooasis.in";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    const status = initialPasswordRules.map((rule) => rule.test(password));
    setRulesStatus(status);
  };

  // Handler
  const handleSignup = async () => {
    if (rulesStatus.every(Boolean)) {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch("https://business.coasis.in/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Signup successful", data);
          setInputFlag(true);
          setButtonLoading(false);
          setTimeout(() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigate("/signin");
            }, 3000);
          }, 3000);
          return toast.success("password reset successfully", {
            autoClose: 2000,
            transition: Slide,
            theme: "colored",
          });
        } else {
          const errorData = await response.json();
          console.error("Signup failed:", errorData.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    } else {
      return toast.error("Password validation failed.", {
        autoClose: 2000,
        transition: Slide,
        theme: "colored",
      });
    }
  };

  const handleChangeEmail = () => {
    navigate("/");
  };

  return (
    <>
      {!isLoading ? (
        <AuthLayout>
          <div className="h-full w-full flex flex-col items-center text-center mt-[3rem]">
            <img
              className="mt-[2.5rem] w-[3rem] h-[3rem]"
              src={circleLogo}
              alt="Business Logo"
            />
            <p className="text-[25px] text-[#FFF5D9] my-[1.5rem]">
              Signup as business
            </p>

            {/* change email */}
            <div className="mt-[1rem]">
              <span className="text-[14px] text-[#5A5A5A] mr-[10px]">
                {email}
              </span>
              <span
                onClick={handleChangeEmail}
                className="text-[#FFF5D9] font-light cursor-pointer"
              >
                Change email
              </span>
            </div>

            {/* Password Field */}
            <div className="relative mt-[3rem] flex items-center justify-center">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                disabled={inputFlag}
                onChange={handlePasswordChange}
                placeholder="Choose password"
                className="bg-[#000000D4] w-[300px] text-[15px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] px-[2rem]"
              />
              <div
                className="absolute inset-y-0 right-[13px] flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <AiOutlineEye className="h-6 w-6 text-[#FFF5D9]" />
                ) : (
                  <AiOutlineEyeInvisible className="h-6 w-6 text-[#FFF5D9]" />
                )}
              </div>
            </div>

            {/* password rules */}
            <div className="w-[300px]">
              <div className="text-[#FFF5D9] flex flex-col items-start gap-[0.3rem] mt-[1.5rem]">
                {initialPasswordRules.map((ruleObj, index) => (
                  <div className="flex items-center" key={index}>
                    <p
                      className={`p-[2px] ${
                        rulesStatus[index] ? "bg-[#3D3D3D]" : "bg-red-500"
                      } rounded-full mr-[6px]`}
                    >
                      {rulesStatus[index] ? (
                        <IoCheckmark className="text-[#FFF5D9] text-[14px]" />
                      ) : (
                        <IoClose className="text-[#FFF5D9] text-[14px]" />
                      )}
                    </p>
                    <span className="text-[14px] f-HelveticaNeueLight">
                      {ruleObj.rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* signUp button */}

            {buttonLoading ? (
              <div>
                <button
                  className="bg-[#262626] mt-[2.5rem] f-HelveticaNeueRoman w-[300px] text-[14px] text-[#E1FF26] rounded-full py-[0.8rem] px-[2rem]"
                  type="button"
                  onClick={handleSignup}
                >
                  Signup
                </button>
                <ToastContainer />
              </div>
            ) : (
              <div>
                <button
                  className="bg-[#262626] mt-[2.5rem] f-HelveticaNeueRoman w-[300px] text-[14px] text-[#E1FF26] rounded-full py-[0.8rem] px-[2rem]"
                  type="button"
                >
                  Loading...
                </button>
                <ToastContainer />
              </div>
            )}
          </div>
        </AuthLayout>
      ) : (
        <Loader /> // Show loading component
      )}
    </>
  );
}

export default ResetPassword;
