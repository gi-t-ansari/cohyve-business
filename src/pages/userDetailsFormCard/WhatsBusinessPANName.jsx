import React, { useState } from "react";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";

import { setPanCardName } from "../../features/userDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import formAvatar from "../../assets/images/formavtar.svg";

const WhatsBusinessPANName = () => {
  const [panName, setPanName] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateInput = () => {
    if (!panName) {
      setError("PAN name cannot be empty.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      console.log("PAN Name:", panName);
      dispatch(setPanCardName(panName));
      navigate("/review-details");
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
      <div className="px-[2rem]">
        <div className="text-center mb-4">
          <h2 className="f-HelveticaNeueRoman text-[#FFF5D9] text-[20px] leading-[25px] mt-[35px]">
            What’s your business PAN name?
          </h2>
          <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mt-[6px] text-center">
            Make sure to enter your name exactly as it appears on the given PAN
            card: AAJCC7944C
          </p>
          <div className="my-2 xxl:my-4">
            <div className="mt-7 mb-20">
              <input
                type="text"
                placeholder="Cooasis Creative Studios Pvt. Ltd."
                value={panName}
                onChange={(e) => setPanName(e.target.value)}
                className="rounded-full border-[1px] border-[#FFFFFF29] bg-transparent text-[#FFFFFF80] text-[15px] leading-[12px] px-7 py-4 w-full"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}{" "}
              {/* Display error message */}
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="f-HelveticaNeueRoman w-full bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
        >
          Continue
        </button>
      </div>
    </UserDetailsFromLayout>
  );
};

export default WhatsBusinessPANName;
