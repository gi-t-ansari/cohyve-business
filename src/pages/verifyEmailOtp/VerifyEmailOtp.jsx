import React, { useState, useEffect } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { useNavigate } from "react-router-dom";
import { setEmailOpt } from "../../features/userSlice"; // Import the action from your Redux slice

// image
import circleLogo from "../../assets/images/circleLogo.svg";

function VerifyEmailOtp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(15);
  const [error, setError] = useState("");

  // Redux state
  const email = useSelector((state) => state.user.email);
  const emailOpt = useSelector((state) => state.user.emailOpt);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // Function to handle OTP verification
  const handleVerify = () => {
    const enteredOtp = otp.join(""); // Join the OTP array into a single string

    if (parseInt(enteredOtp) === parseInt(emailOpt)) {
      navigate("/reset-password");
    } else {
      setError("Invalid OTP. Please try again."); // Set error message if OTP is invalid
    }
  };

  // Change email handler
  const handleChangeEmail = () => {
    navigate("/");
  };

  // Generate new OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  // OTP handler
  const handleGenerateOtp = () => {
    const newOtp = generateOTP();
    console.log(newOtp);
    dispatch(setEmailOpt(newOtp)); // Dispatch the new OTP to Redux
    setCountdown(15); // Reset the countdown when the OTP is resent
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-around">
        <img
          className="mt-[2.5rem] w-[3rem] h-[3rem]"
          src={circleLogo}
          alt="Business Logo"
        />

        <p className="text-[25px] my-[1.5rem] text-[#FFF5D9]">Verify Email</p>
        <p className="text-[14px] text-[#5A5A5A] f-HelveticaNeueRoman">
          Enter 6-Digit verification code sent to {email}
        </p>
        <p
          onClick={handleChangeEmail}
          className="mt-[0.6rem] text-[#FFF5D9] f-HelveticaNeueRoman cursor-pointer"
        >
          Change email
        </p>

        <div className="flex flex-col items-center justify-center my-[3.5rem]">
          <div className="flex justify-center items-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`w-12 h-12 text-gray-400 bg-black text-center border-2 border-gray-600 rounded-full text-2xl focus:outline-none focus:border-gray-400 transition-colors duration-200 ${
                  error && "border-red-500" // Highlight input border in red if error exists
                }`}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()} // Select the text on focus
                onKeyDown={(e) => handleKeyDown(e, index)} // Handle key down events
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error}</p> // Display error message in red below the inputs
          )}
        </div>

        <div>
          <span className="f-HelveticaNeueRoman text-[14px] text-[#C8C8C8]">
            Didn't get the code?{" "}
          </span>
          {countdown > 0 ? (
            <span className="f-HelveticaNeueRoman text-[14px] text-gray-600">
              wait {countdown} seconds to resend
            </span>
          ) : (
            <button
              onClick={handleGenerateOtp}
              className="f-HelveticaNeueRoman cursor-pointer ml-[3px] text-[14px] text-gray-600"
            >
              Click to resend
            </button>
          )}
        </div>

        <button
          className="bg-[#262626] mt-[2.5rem] f-HelveticaNeueRoman w-[300px] text-[14px] text-[#E1FF26] rounded-full py-[1rem] px-[2rem]"
          type="button" // Change to type="button" to prevent form submission
          onClick={handleVerify} // Call handleVerify on click
        >
          Verify account
        </button>
      </div>
    </AuthLayout>
  );
}

export default VerifyEmailOtp;
