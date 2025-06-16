import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";

import { setUserName } from "../../features/userDetailsSlice";
import { useSelector, useDispatch } from "react-redux";

import formAvatar from "../../assets/images/formavtar.svg";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

// Track Progress Bar page
import { setTrackNamePage } from "../../features/trackProgressbarSlice";

const FirstLastNameForm = () => {
  const { fName, lName } = useSelector((state) => state.userDetails.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(fName, lName);

  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const textOnlyRegex = /^[A-Za-z\s]+$/;

  // Handler
  const handleContinue = () => {
    let errorMessage = "";

    // Validate first name
    if (!firstName.trim()) {
      errorMessage = "First name is required.";
    } else if (!textOnlyRegex.test(firstName)) {
      errorMessage = "First name can only contain letters.";
    }

    // Validate last name if no error from first name
    if (!lastName.trim() && !errorMessage) {
      errorMessage = "Last name is required.";
    } else if (!textOnlyRegex.test(lastName) && !errorMessage) {
      errorMessage = "Last name can only contain letters.";
    }

    setError(errorMessage);

    // If no error message, proceed to the next page
    if (!errorMessage) {
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      dispatch(setUserName({ firstName, lastName }));
      dispatch(setTrackNamePage(true));
      setLoader(true);
      navigate("/user-role");
    }
  };

  return (
    <>
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
        <div className="px-[2rem]">
          <div className="text-center mb-4">
            <h2 className="f-HelveticaNeueRoman text-[#FFF5D9] text-[20px] leading-[25px] mt-[35px]">
              What’s your name
            </h2>
            <div className="flex justify-center items-center">
              <div className="flex items-center mt-16 space-x-2">
                {/* First Name Input */}
                <div className="w-1/2">
                  <input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-4 rounded-full border-[1px]  border-[#FFFFFF29] f-HelveticaNeueRoman text-[#FFFFFF80] text-[14px] leading-[12px] bg-transparent focus:outline-none"
                  />
                </div>

                {/* Last Name Input */}
                <div className="w-1/2">
                  <input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-4 py-4 rounded-full border-[1px]  border-[#FFFFFF29] f-HelveticaNeueRoman text-[#FFFFFF80] text-[14px] leading-[12px] bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              {/* Display the combined error below both inputs */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
          {loader ? (
            <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
              <ButtonLoader />
              {/* Loading */}
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
            >
              Continue
            </button>
          )}
        </div>
      </UserDetailsFromLayout>
    </>
  );
};

export default FirstLastNameForm;
