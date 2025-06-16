import React, { useContext, useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import ReactCountryFlag from "react-country-flag";
import { getCode } from "country-list";
import { useNavigate } from "react-router-dom";
import { auth, sendSignInLinkToEmail } from "../../firebase.config";

// image
import circleLogo from "../../assets/images/circleLogo.svg";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setEmailOpt,
  setComName,
  setComFlag,
} from "../../features/userSlice";

function SignUp() {
  const dispatch = useDispatch();

  // Use useSelector to access global state from Redux
  const email = useSelector((state) => state.user.email);
  const comName = useSelector((state) => state.user.comName);
  const comFlag = useSelector((state) => state.user.comFlag);

  // Local state variables for form input
  const [companyName, setCompanyName] = useState(comName);
  const [companyEmail, setCompanyEmail] = useState(email);
  const [country, setCountry] = useState(comFlag);
  const [countryCode, setCountryCode] = useState("");
  const [errors, setErrors] = useState({});
  const [linkSent, setLinkSent] = useState(false);

  const actionCodeSettings = {
    url: `https://release.d333l9e2sjygsd.amplifyapp.com/reset-password?email=${encodeURIComponent(
      companyEmail
    )}`, // Your app URL to handle email verification
    handleCodeInApp: true,
  };

  const navigate = useNavigate();

  // Generate 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  // Handler
  const handleInputChange = (event) => {
    const countryName = event.target.value;
    setCountry(countryName);

    // Get country code from country name
    const code = getCode(countryName);
    setCountryCode(code);
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const validateEmail = (email) => {
    // Dynamically create the regex based on companyName
    const companyDomain = companyName.replace(/\s+/g, "").toLowerCase();
    const emailRegex = new RegExp(
      `^[\\w-\\.]+@${companyDomain}\\.(com|in)$`,
      "i"
    );
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required.";
    } else if (!validateEmail(companyEmail)) {
      newErrors.companyEmail = `Email must be in the format: name@${companyName
        .replace(/\s+/g, "")
        .toLowerCase()}.com or name@${companyName
        .replace(/\s+/g, "")
        .toLowerCase()}.in`;
    }

    if (!country.trim()) newErrors.country = "Country is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        try {
          if (!companyEmail) {
            setErrors({ companyEmail: "Email is required." });
            return;
          }
          const response = await sendSignInLinkToEmail(
            auth,
            companyEmail,
            actionCodeSettings
          );
          console.log("Response from Firebase:", response);
          setLinkSent(true);
        } catch (error) {
          console.error("Error sending OTP:", error.message); // This will give more details
        }
        window.localStorage.setItem("emailForSignIn", companyEmail); // Store email for verification later
        console.log("OTP sent to:", companyEmail);

        // Dispatch to Redux
        dispatch(setComName(companyName));
        dispatch(setComFlag(country));
        dispatch(setEmail(companyEmail));
      } catch (error) {
        console.error("Error sending OTP:", error);
        setErrors({ email: error.message });
      }
    }
  };

  return (
    <AuthLayout>
      <div className="h-full flex flex-col items-center text-center mt-[1rem]">
        <img
          className="mt-[2.5rem] w-[3rem] h-[3rem]"
          src={circleLogo}
          alt="Business Logo"
        />
        <p className="text-[25px]  text-[#FFF5D9] my-[1.5rem]">
          Signup as business
        </p>

        <form className="flex flex-col gap-[0.7rem]" onSubmit={handleSubmit}>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] rounded-full py-[0.8rem] px-[2rem] ${
              errors.companyName ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Company name*"
            disabled={linkSent}
          />

          <input
            type="email"
            id="company_email"
            name="company_email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] rounded-full py-[0.8rem] px-[2rem] ${
              errors.companyEmail ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Company email*"
            disabled={linkSent}
          />

          <div className="relative">
            <input
              type="text"
              value={country}
              onChange={handleInputChange}
              placeholder="Country name*"
              className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] rounded-full py-[0.8rem] px-[2rem] ${
                errors.country ? "border-red-500" : "border-gray-700"
              }`}
              disabled={linkSent}
            />
            {countryCode && (
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                className="absolute top-[1.2rem] right-[1.5rem]"
              />
            )}
          </div>

          {/* Button */}
          <button
            className={`bg-[#262626] mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-full py-[0.8rem] px-[2rem] ${
              linkSent && "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={linkSent}
          >
            Create an account
          </button>
        </form>

        {linkSent && (
          <p className="text-green-500 mt-4">
            Verification link has been sent to your email. Please verify it.
          </p>
        )}
        <p className="text-[#FCFCD8] my-[1rem]">
          <span className="text-[14px]">Already have an account? </span>
          <span
            onClick={handleSignIn}
            className="text-[#E1FF26] text-[14px] underline cursor-pointer"
          >
            Sign In
          </span>
        </p>

        <p className="text-[14px] p-[0.5rem] text-[#FFF5D9]">
          <span>By creating an account you agree with our </span>
          <span className="underline cursor-pointer">Terms of Service, </span>
          <span className="underline cursor-pointer">Privacy Policy, </span>
          <span>and our default </span>
          <span className="underline cursor-pointer">
            Notification Settings.
          </span>
        </p>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
