import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

// Track Progress Bar page
import { setTrackOtpPage } from "../../features/trackProgressbarSlice";

const OTPVerification = () => {
  const mobileNumber = useSelector((state) => state.userDetails.mobileNumber);
  const flagNamePage = useSelector((state) => state.flagPage.flagNamePage);

  // const validOTP = useSelector((state) => state.userDetails.otp);
  const confirmationResult = useSelector(
    (state) => state.userDetails.confirmationResult
  ); // Access confirmationResult

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(15);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  // Function to handle input change
  const handleChange = (element, index) => {
    const value = element.value;

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Focus on the next input field if available
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Function to handle key down events
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        // Focus on the previous input field and clear its value
        const prevInput = event.target.previousSibling;
        if (prevInput) {
          prevInput.focus();
          prevInput.value = "";
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index - 1] = "";
            return newOtp;
          });
        }
      }
    }
  };

  // handler
  const handleVerifyOTP = async () => {
    const enteredOtp = otp.join("");
    setLoader(true);

    if (flagNamePage) {
      if (confirmationResult && enteredOtp) {
        // Check if confirmationResult is available
        try {
          const verificationResult = await confirmationResult.confirm(
            enteredOtp
          );
          console.log("OTP is valid", verificationResult);
          dispatch(setTrackOtpPage(true));
          navigate("/user-name");
        } catch (error) {
          setError("Invalid OTP. Please try again.");
          console.log("Error verifying OTP", error);
        }
      } else {
        setError("Confirmation result not found.");
      }
    } else {
      setLoader(true);
      navigate("/review-details");
    }
  };

  // Generate OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  // handle generate new OTP
  const handleGenerateOtp = () => {
    const newOtp = generateOTP();
    console.log(newOtp);
    // dispatch(setEmailOpt(newOtp));
    setCountdown(15);
  };

  return (
    <>
      <UserDetailsFromLayout>
        <div className="px-[2rem]">
          <div className="text-center mb-4">
            <h2 className="text-[#FFF5D9] text-[25px] leading-[20px] mt-[50px]">
              Verify your mobile number
            </h2>
            <p className="f-HelveticaNeueRoman  text-[#5A5A5A] text-[14px] leading-[12px] mt-8">
              Enter 6-Digit verification code sent to {mobileNumber}
            </p>
            <Link to="/mobile-verify">
              <p className="text-[#FFF5D9] f-HelveticaNeueRoman text-[14px] leading-[12px] mt-3 cursor-pointer">
                Change number
              </p>
            </Link>
          </div>
          <div className="flex justify-between mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`w-12 h-12 text-center text-2xl text-white rounded-full focus:outline-none border-[1px] border-[#FFFFFF29] bg-transparent mx-[2px] mt-6 ${
                  error && "border-red-500"
                }`}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div>
            <p className="f-HelveticaNeueRoman text-center text-[#C8C8C8] text-[14px] leading-[12px] mb-32 mt-6">
              Didn't get the code?{" "}
              <span
                className={`text-[#FFF5D96B] cursor-pointer ${
                  countdown > 0 && "pointer-events-none opacity-50"
                }`}
                onClick={handleGenerateOtp}
              >
                {countdown > 0 ? `Resend in ${countdown}s` : "Click to resend"}
              </span>
            </p>
          </div>

          {loader ? (
            <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
              <ButtonLoader />
              {/* Loading */}
            </button>
          ) : (
            <button
              onClick={handleVerifyOTP}
              className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
            >
              Verify Mobile
            </button>
          )}
        </div>
      </UserDetailsFromLayout>
    </>
  );
};

export default OTPVerification;
