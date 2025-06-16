import React, { useState } from "react";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { setUserWebsite } from "../../features/userDetailsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import formAvatar from "../../assets/images/formavtar.svg";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

import { setTrackWebsitePage } from "../../features/trackProgressbarSlice";

const AddYourWebsiteLink = () => {
  const urlLink = useSelector((state) => state.userDetails.userWebsite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [url, setUrl] = useState(
    urlLink ? urlLink.replace("https://", "") : ""
  );
  const [isValid, setIsValid] = useState(true);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const validateURL = (inputUrl) => {
    const urlPattern = new RegExp("^[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
    return !!urlPattern.test(inputUrl);
  };

  // Handler
  const handleContinue = () => {
    const fullUrl = `https://${url.trim()}`;

    if (validateURL(url.trim())) {
      setIsValid(true);
      dispatch(setUserWebsite(fullUrl));
      dispatch(setTrackWebsitePage(true));
      console.log("Full URL:", fullUrl);

      setLoader(true);
      navigate("/user-business-type");
    } else {
      setIsValid(false);
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
              Add your website link
            </h2>
            <div className="flex justify-start items-center mt-10">
              <div className="relative w-full">
                {/* Input field with https:// prepended inside */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#FFF5D9] text-[16px]">
                  https://
                </span>
                <input
                  type="text"
                  value={url}
                  onChange={handleChange}
                  placeholder="example.com"
                  className={`f-HelveticaNeueRoman w-full pl-[80px] px-4 py-4 rounded-full border-[1px] ${
                    isValid ? "border-[#FFFFFF29]" : "border-red-500"
                  } text-[#FFFFFF80] text-[14px] leading-[12px] bg-transparent focus:outline-none focus:border-white placeholder-gray-400`}
                />
              </div>
            </div>
            <div className="mb-20">
              {!isValid && (
                <p className="text-red-500 text-[14px] mt-2 ">
                  Please enter a valid URL (e.g., example.com)
                </p>
              )}
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

export default AddYourWebsiteLink;
