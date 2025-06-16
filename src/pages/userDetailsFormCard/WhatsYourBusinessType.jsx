import React, { useState } from "react";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserBusinessType } from "../../features/userDetailsSlice";

import formAvatar from "../../assets/images/formavtar.svg";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

import { setTrackBusinessTypePage } from "../../features/trackProgressbarSlice";

// data
const individualBusinessTypes = ["Individual", "Proprietorship"];
const registeredBusinessTypes = [
  "Partnership",
  "Private Limited",
  "Public Limited",
  "LLP",
  "Trust",
];

const WhatsYourBusinessType = () => {
  const [selectedBusinessType, setSelectedBusinessType] = useState(""); // Store only the selected business data
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = (type) => {
    setSelectedBusinessType(type);
  };

  const validateForm = () => {
    if (!selectedBusinessType) {
      setErrors("Please select a business type.");
      return false;
    }
    setErrors("");
    return true;
  };

  // Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoader(true);

      // Dispatch the selected business type
      dispatch(setUserBusinessType(selectedBusinessType));
      dispatch(setTrackBusinessTypePage(true));
      navigate("/review-details");
    }
  };

  return (
    <UserDetailsFromLayout>
      {/* Header Section */}
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

      {/* Form Section */}
      <div className="text-center px-[1rem]">
        <h2 className="f-HelveticaNeueRoman text-[#FFF5D9] text-[20px] leading-[25px] mt-[20px]">
          What’s your business type?
        </h2>
        <p className="f-HelveticaNeueRoman text-[14px] text-[#FFF5D975] leading-[18px] mt-1 text-center">
          Pick only one that applies to your business
        </p>
        <form className="pt-4 space-y-4" onSubmit={handleSubmit}>
          {/* Individual Business */}
          <div className="space-y-1">
            <h3 className="flex items-center text-[14px] text-[#FFF5D975] leading-[18px] !text-start mb-4">
              Individual Business
              <span className="ml-2">
                <img src="/images/errorround.svg" alt="" />
              </span>
            </h3>
            <div className="space-x-4 flex flex-wrap gap-2">
              {individualBusinessTypes.map((type) => {
                const isActive = selectedBusinessType === type;
                return (
                  <div
                    key={type}
                    className={`cursor-pointer p-2 rounded-full ${
                      isActive
                        ? "bg-[#D9D9D921] text-[14px] text-[#E1FF26] leading-[17px] border-[1px] border-[#FFF5D933] px-3 py-[6px] !ml-0 space-x-2 rounded-full"
                        : "bg-transparent text-[14px] text-[#FFF5D9] leading-[17px] border-[1px] border-[#FFF5D933] px-3 py-[6px] !ml-0 space-x-2 rounded-full"
                    }`}
                    onClick={() => handleCheckboxChange(type)}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Registered Business */}
          <div className="space-y-2">
            <h3 className="flex items-center text-[14px] text-[#FFF5D975] leading-[18px] !text-start mb-4">
              Registered Business{" "}
              <span className="ml-2">
                <img src="/images/errorround.svg" alt="" />
              </span>
            </h3>
            <div className="space-x-4 flex flex-wrap gap-2">
              {registeredBusinessTypes.map((type) => {
                const isActive = selectedBusinessType === type;
                return (
                  <div
                    key={type}
                    className={`cursor-pointer p-2 rounded-full ${
                      isActive
                        ? "bg-[#D9D9D921] text-[14px] text-[#E1FF26] leading-[17px] border-[1px] border-[#FFF5D933] px-3 py-[6px] !ml-0 space-x-2 rounded-full"
                        : "bg-transparent text-[14px] text-[#FFF5D9] leading-[17px] border-[1px] border-[#FFF5D933] px-3 py-[6px] !ml-0 space-x-2 rounded-full"
                    }`}
                    onClick={() => handleCheckboxChange(type)}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          </div>

          {errors && <p className="text-red-500 text-sm">{errors}</p>}

          {/* Submit Button */}
          {loader ? (
            <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
              <ButtonLoader />
              {/* Loading */}
            </button>
          ) : (
            <button
              type="submit"
              className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
            >
              Continue
            </button>
          )}
        </form>
      </div>
    </UserDetailsFromLayout>
  );
};

export default WhatsYourBusinessType;
