import React, { useState } from "react";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";

import { setPanNumber } from "../../features/userDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import formAvatar from "../../assets/images/formavtar.svg";

const WhatsYourBusinessPAN = () => {
  const [inputValues, setInputValues] = useState(["", "", ""]); // State to track the input values
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    // Update the value of the current input
    const updatedValues = [...inputValues];
    updatedValues[index] = value;

    if (index < 2 && value.length === 4) {
      // Move to the next input if current input reaches 4 characters
      const nextInput = document.getElementById(`input-${index + 1}`);
      nextInput.focus();
    }

    // Update state with new values
    setInputValues(updatedValues);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      if (index > 0) {
        const prevInput = document.getElementById(`input-${index - 1}`);
        prevInput.focus();
      }
    }
  };

  const validatePAN = () => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const fullPAN = inputValues.join("");

    if (!panPattern.test(fullPAN)) {
      setErrorMessage("Invalid PAN number. Please enter a valid PAN.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleVerifyClick = () => {
    if (validatePAN()) {
      const PAN = inputValues.join("");
      console.log("PAN Number:", PAN);
      dispatch(setPanNumber(PAN));
      navigate("/user-business-pan-name");
    }
  };

  return (
    <UserDetailsFromLayout>
      <div className="bg-[#0000008A] rounded-[25px] p-4 mt-10">
        <div className="flex items-center justify-between">
          <p className="text-[18px] text-[#FFF5D9] leading-[26px]">
            Hire an onboarding manager for faster account set up! 👩🏽‍💼
          </p>
          <img src={formAvatar} alt="" />
        </div>
        <h3 className="text-[#FFF5D9] text-[14px] leading-[18px] mt-4">
          Know more
        </h3>
      </div>
      <div className="text-center mb-4 px-[2rem]">
        <h2 className="f-HelveticaNeueRoman text-[#FFF5D9] text-[20px] leading-[25px] mt-[35px]">
          What’s your business PAN?
        </h2>
        <p className="f-HelveticaNeueRoman text-[14px] text-[#FFF5D975] leading-[18px] mt-1 text-center">
          We require this to verify your identity
        </p>
        <div className="flex justify-start items-center my-2 xxl:my-4">
          <div className="flex space-x-2 mt-7 ">
            {/* First Input: Elliptical */}
            <input
              id="input-0"
              type="text"
              maxLength={4}
              value={inputValues[0]}
              onChange={(e) => handleChange(0, e.target.value)}
              onKeyDown={(e) => handleKeyDown(0, e)}
              className="rounded-full border-[1px] border-[#FFFFFF29] bg-transparent text-white px-6 py-2 w-full"
            />

            {/* Second Input: Rounded Rectangular */}
            <input
              id="input-1"
              type="text"
              maxLength={4}
              value={inputValues[1]}
              onChange={(e) => handleChange(1, e.target.value)}
              onKeyDown={(e) => handleKeyDown(1, e)}
              className="rounded-full border-[1px] border-[#FFFFFF29] bg-transparent text-white px-6 py-2 w-full"
            />

            {/* Third Input: Circular */}
            <input
              id="input-2"
              type="text"
              maxLength={2}
              value={inputValues[2]}
              onChange={(e) => handleChange(2, e.target.value)}
              onKeyDown={(e) => handleKeyDown(2, e)}
              className="rounded-full border-[1px] border-[#FFFFFF29] bg-transparent text-white px-[1rem] py-2 w-[63px]"
            />
          </div>
        </div>
        <div className="mb-20">
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p> // Display error message
          )}
        </div>

        <button
          type="button"
          onClick={handleVerifyClick}
          className="f-HelveticaNeueRoman w-full bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
        >
          Continue
        </button>
      </div>
    </UserDetailsFromLayout>
  );
};

export default WhatsYourBusinessPAN;
