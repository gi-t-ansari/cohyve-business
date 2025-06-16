import React, { useEffect, useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

// Firebase
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";

// Icons
import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";

// Tostify popup
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux
import {
  setConfirmationResult,
  setMobileNumber,
} from "../../features/settingsSlice/accountInfoSlice";
import { useSelector, useDispatch } from "react-redux";

function AccountInformation() {
  const confirmationResult = useSelector(
    (state) => state.accountInfo.confirmationResult
  );
  const mobileNumber = useSelector((state) => state.accountInfo.mobileNumber);

  const dispatch = useDispatch();

  const [name, setName] = useState("Rupesh Kumar");
  const [email, setEmail] = useState("rupesh@cooasis.in");
  const [mobile, setMobile] = useState(mobileNumber);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  // const [validOtp, setValidOtp] = useState(confirmationResult);

  const [countdown, setCountdown] = useState(15);

  const [isInputName, setIsInutName] = useState(false);
  const [isInputEmail, setIsInutEmail] = useState(false);
  const [isOptModal, setIsOtpModal] = useState(false);
  const [isInputMobile, setIsInputMobile] = useState(false);
  const [isVerifyButtonVisible, setIsVerifyButtonVisible] = useState(false);
  const [isEditButtonVisible, setIsEditButtonVisible] = useState(false);
  const [isResendOtpVisible, setIsResendOtpVisible] = useState(false);

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [error, setError] = useState("");
  const [mobileError, setMobileError] = useState("");

  // Resend OTP Timer effect
  useEffect(() => {
    let timer;
    if (isTimerRunning && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
      setIsTimerRunning(false);
    }

    return () => clearInterval(timer);
  }, [isTimerRunning, countdown]);

  // Firebase
  const setupRecaptcha = (value) => {
    console.log(value);
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, you can now trigger OTP request
          // console.log("reCAPTCHA resolved:", response);
        },
        "expired-callback": () => {
          // Handle the case when reCAPTCHA response expires
          console.log("reCAPTCHA expired");
        },
      }
    );

    recaptchaVerifier.render(); // Render the reCAPTCHA
    return signInWithPhoneNumber(auth, value, recaptchaVerifier);
  };

  // Name Handler
  const handleNameEdit = () => {
    setIsInutName(true);
  };
  const handleNameSave = () => {
    setIsInutName(false);
  };

  // Email Handler
  const handleEmailSave = () => {
    setIsInutEmail(true);
  };
  const handleEmailVerify = () => {
    setIsInutEmail(false);
  };

  // Mobile Handler
  const handleMobileEdit = () => {
    setIsEditButtonVisible(true);
    setIsInputMobile(true);
    setIsOtpModal(false);
    setIsVerifyButtonVisible(false);
    // setIsTextVisible(false);
    setIsResendOtpVisible(false);

    setCountdown(15);
    setIsTimerRunning(false);
  };

  // Handler Send OTP
  const handleSendOTP = async () => {
    if (!isValidPhoneNumber(mobile)) {
      setMobileError("Please enter a valid phone number.");
      return;
    }
    console.log("Entered Mobile Number:", mobile);
    try {
      const result = await setupRecaptcha(mobile);
      console.log("OTP sent successfully", result);
      dispatch(setConfirmationResult(result));

      setIsOtpModal(true);
      setIsVerifyButtonVisible(true);
      setIsInputMobile(false);
      setIsEditButtonVisible(true);
      setMobileError("");
      setOtp(new Array(6).fill(""));
      setIsResendOtpVisible(true);
      setIsTimerRunning(true);

      return toast.success("OTP has send to mobile number", {
        autoClose: 4000,
        transition: Slide,
        theme: "colored",
      });
    } catch (error) {
      console.log("Error sending OTP", error);
      toast.error("Something went wrong", {
        autoClose: 4000,
        transition: Slide,
        theme: "colored",
      });
    }
  };

  // Handler Resend OTP
  const handlerReSendOTP = async () => {
    console.log("Entered Mobile Number:", mobile);
    try {
      const result = await setupRecaptcha(mobile);
      console.log("OTP sent successfully", result);
    } catch (error) {
      console.log("Error sending OTP", error);
    }

    setCountdown(15);
    setIsTimerRunning(true);
  };

  // Handler Mobile OTP verify
  const handleMobileVerifyOTP = async () => {
    const enteredOtp = otp.join("");
    console.log("confirm res: ", confirmationResult);
    console.log(enteredOtp);
    try {
      const verificationResult = await confirmationResult.confirm(enteredOtp);

      console.log("OTP is valid", verificationResult);
      dispatch(setMobileNumber(mobile));

      setIsInputMobile(false);
      setIsEditButtonVisible(false);
      setIsVerifyButtonVisible(false);
      setIsOtpModal(false);
      setIsResendOtpVisible(false);

      return toast.success("OTP Verified Successfully!", {
        autoClose: 4000,
        transition: Slide,
        theme: "colored",
      });
    } catch (error) {
      console.log("Error verifying OTP", error);
    }
  };

  // otp Handler
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

  return (
    <div className="w-[80%] h-full">
      <ToastContainer />
      {/* Name */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Name
          </h4>
          {isInputName ? (
            <div className="w-[320px]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="email"
                placeholder="manager@cooasis.in"
                className="w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border-none focus:outline-none"
              />
            </div>
          ) : (
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              {name}
            </span>
          )}
        </div>
        {isInputName ? (
          <button
            onClick={handleNameSave}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] bg-[#171717]"
          >
            <img src={verifiedtickIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Save
            </span>
          </button>
        ) : (
          <button
            onClick={handleNameEdit}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] bg-[#171717]"
          >
            <img src={penIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Edit
            </span>
          </button>
        )}
      </div>

      {/* Border Line */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Email */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Email
          </h4>
          {isInputEmail ? (
            <div className="w-[320px]">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="manager@cooasis.in"
                className="w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border-none focus:outline-none"
              />
            </div>
          ) : (
            <div className="flex items-center gap-[1rem]">
              <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
                {email}
              </span>
              <div className="flex relative items-center px-[0.5rem] py-[0.2rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
                <div className="relative flex items-center">
                  <img src={verifiedbgIcon} alt="" />
                  <img
                    src={verifiedtickIcon}
                    className="absolute right-[5px] "
                    alt=""
                  />
                </div>
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                  verified
                </span>
              </div>
            </div>
          )}
        </div>
        {isInputEmail ? (
          <button
            onClick={handleEmailVerify}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-lg cursor-pointer bg-[#171717]"
          >
            <img src={verifiedtickIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Verify
            </span>
          </button>
        ) : (
          <button
            onClick={handleEmailSave}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-lg cursor-pointer bg-[#171717]"
          >
            <img src={penIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Edit
            </span>
          </button>
        )}
      </div>

      {/* Border Line */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Mobile */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Mobile
          </h4>

          {isInputMobile ? (
            <div>
              <div className="">
                <div className="flex gap-[1rem]">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={mobile}
                    onChange={setMobile}
                    className="w-[250px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border-none focus:outline-none"
                  />
                  <div
                    id="recaptcha-container"
                    style={{ display: "none" }}
                  ></div>
                  <button
                    onClick={handleSendOTP}
                    className="flex items-center px-[1rem] rounded-[16px] bg-[#171717]"
                  >
                    <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[14px]">
                      Send OTP
                    </span>
                  </button>
                </div>
              </div>
              {mobileError && (
                <p className="text-red-500 mt-2 text-sm">{mobileError}</p> // Display error message in red below the inputs
              )}
            </div>
          ) : (
            <div className="flex items-center gap-[1rem]">
              <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
                {mobile}
              </span>
              {isEditButtonVisible ? (
                <button
                  onClick={handleMobileEdit}
                  className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-lg cursor-pointer bg-[#171717]"
                >
                  <img src={penIcon} alt="" />
                  <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
                    Edit
                  </span>
                </button>
              ) : (
                <div className="flex relative items-center px-[0.5rem] py-[0.2rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
                  <div className="relative flex items-center">
                    <img src={verifiedbgIcon} alt="" />
                    <img
                      src={verifiedtickIcon}
                      className="absolute right-[5px] "
                      alt=""
                    />
                  </div>
                  <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                    verified
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {!isEditButtonVisible && (
          <button
            onClick={handleMobileEdit}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-lg cursor-pointer bg-[#171717]"
          >
            <img src={penIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Edit
            </span>
          </button>
        )}
        {isVerifyButtonVisible && (
          <button
            onClick={handleMobileVerifyOTP}
            className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-lg cursor-pointer bg-[#171717]"
          >
            <img src={verifiedtickIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
              Verify
            </span>
          </button>
        )}
      </div>

      {/* OTP input section */}
      {isOptModal && (
        <div className="flex flex-col items-start justify-center mt-[1.5rem] px-[1.5rem]">
          <div className="flex justify-center items-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`w-[3rem] h-[3rem] rounded-full text-gray-400 bg-black text-center border-2 border-gray-600  text-2xl focus:outline-none focus:border-gray-400 transition-colors duration-200 ${
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
      )}

      {/* Resend Button */}
      {isResendOtpVisible ? (
        <div className="px-[1.5rem] mt-[0.5rem]">
          <span className="f-HelveticaNeueRoman text-[14px] text-[#C8C8C8]">
            Didn't get the code?{" "}
          </span>
          {countdown > 0 ? (
            <span className="f-HelveticaNeueRoman text-[14px] text-gray-600">
              wait {countdown} seconds to resend
            </span>
          ) : (
            <button
              onClick={handlerReSendOTP}
              className="f-HelveticaNeueRoman cursor-pointer ml-[3px] text-[14px] text-gray-600"
            >
              Click to resend
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default AccountInformation;
