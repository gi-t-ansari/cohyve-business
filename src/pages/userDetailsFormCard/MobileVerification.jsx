import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";

import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setMobileNumber,
  setMobileOTP,
  setConfirmationResult,
} from "../../features/userDetailsSlice";
import { setFlagOtpPage } from "../../features/flagPageSlice";

// Track Progress Bar page
import { setTrackMobileNumberPage } from "../../features/trackProgressbarSlice";

const MobileVerification = () => {
  const mobileNumber = useSelector((state) => state.userDetails.mobileNumber);
  const flagOtpPage = useSelector((state) => state.flagPage.flagOtpPage);

  const dispatch = useDispatch();
  const [value, setValue] = useState(mobileNumber);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // // Generate new OTP
  // const generateOTP = () => {
  //   return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  // };

  const setupRecaptcha = (value) => {
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

  // Handler
  const handleVerifyMobile = async (e) => {
    e.preventDefault();
    console.log("Entered Mobile Number:", value);
    setLoader(true);
    if (flagOtpPage) {
      try {
        const result = await setupRecaptcha(value);
        console.log("OTP sent successfully", result);
        dispatch(setTrackMobileNumberPage(true));
        dispatch(setConfirmationResult(result));
        dispatch(setMobileNumber(value));
        navigate("/verify-mobile-otp");
      } catch (e) {
        console.log("Error sending OTP", e);
      }
    } else {
      navigate("/review-details");
    }
  };

  // const handleVerifyMobile = () => {
  //   if (isValidPhoneNumber(value)) {
  //     const otp = generateOTP();

  //     console.log("Valid mobile number:", value);
  //     console.log("OTP: ", otp);
  //     dispatch(setMobileNumber(value));
  //     dispatch(setMobileOTP(otp));
  //     navigate("/verify-mobile-otp");
  //   } else {
  //     console.log("Invalid mobile number. Please enter a valid number.");
  //   }
  // };

  return (
    <>
      <UserDetailsFromLayout>
        <div className="px-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[#FFF5D9] text-[25px] leading-[20px] mt-[50px]">
              What’s your mobile number
            </h2>
          </div>
          <div className="mb-[200px]">
            <PhoneInput
              international
              defaultCountry="IN"
              value={value}
              onChange={setValue}
              className="f-HelveticaNeueRoman w-full text-[15px] text-[#FFFFFF80] leading-[12px] px-4 py-4 border-[1px] border-[#FFFFFF29] bg-transparent text-white rounded-full focus:outline-none focus:ring-2 mt-14"
            />
          </div>
          <div id="recaptcha-container" style={{ display: "none" }}></div>
          {loader ? (
            <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
              <ButtonLoader />
              {/* Loading */}
            </button>
          ) : (
            <button
              className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-5"
              onClick={handleVerifyMobile}
            >
              Verify Mobile
            </button>
          )}
        </div>
      </UserDetailsFromLayout>
    </>
  );
};

export default MobileVerification;
