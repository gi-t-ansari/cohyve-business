import React, { useState } from "react"; // 10
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { useSelector, useDispatch } from "react-redux";
import Congratulations from "./Congratulations";
import {
  setFlagNamePage,
  setFlagWebsitePage,
} from "../../features/flagPageSlice";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

const ReviewYourDetails = () => {
  // redux data
  const mobileNumber = useSelector((state) => state.userDetails.mobileNumber);
  const businessRole = useSelector((state) => state.userDetails.userRole);
  const businessTypeData = useSelector(
    (state) => state.userDetails.userBusinessType
  );
  const panNumer = useSelector((state) => state.userDetails.panNumer);
  const panCardName = useSelector((state) => state.userDetails.panCardName);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = () => {
    setLoader(true);
    setShowCongratulations(true);
  };

  // Edit handlers
  // mobile
  const handleEditMobileNumber = () => {
    dispatch(setFlagNamePage(false));
    navigate("/verify-mobile");
  };
  // Role
  const handleEditRole = () => {
    dispatch(setFlagWebsitePage(false));
    navigate("/user-role");
  };
  // Business type
  const handleBusinessType = () => {
    navigate("/user-business-type");
  };

  return (
    <>
      {showCongratulations ? (
        <Congratulations />
      ) : (
        <UserDetailsFromLayout>
          <div className="px-[1rem] flex flex-col items-center">
            <div className="w-full md:w-[360px]">
              <h2 className="f-HelveticaNeueLight text-[25px] text-[#FFF5D9] leading-[20px] text-center mb-6 mt-8">
                Review your details
              </h2>

              {/* Mobile Number */}
              <div className="flex flex-col bg-transparent border-b border-[#FFF5D930] focus:outline-none w-full pb-4 mt-8">
                <label className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mb-1">
                  What's your mobile number?
                </label>

                <div className="flex justify-between items-center">
                  <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D9] leading-[18px]">
                    {mobileNumber}
                  </p>
                  <button
                    onClick={handleEditMobileNumber}
                    className="text-[11px] text-[#FFF5D975] leading-[14px] bg-[#3D3D3D] rounded-full px-2 py-1"
                  >
                    edit
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="flex flex-col bg-transparent border-b border-[#FFF5D930] focus:outline-none w-full pb-4 mt-4">
                <label className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mb-1">
                  What’s your role?
                </label>
                <div className="flex justify-between items-center">
                  <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D9] leading-[18px]">
                    {businessRole}
                  </p>
                  <button
                    onClick={handleEditRole}
                    className="text-[11px] text-[#FFF5D975] leading-[14px] bg-[#3D3D3D] rounded-full px-2 py-1"
                  >
                    edit
                  </button>
                </div>
              </div>

              {/* Business Type */}
              <div className="flex flex-col bg-transparent border-b border-[#FFF5D930] focus:outline-none w-full pb-4 mt-4">
                <label className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mb-1">
                  Add your business type ?
                </label>
                <div className="flex justify-between items-center">
                  <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D9] leading-[18px]">
                    {businessTypeData}
                  </p>
                  <button
                    onClick={handleBusinessType}
                    className="text-[11px] text-[#FFF5D975] leading-[14px] bg-[#3D3D3D] rounded-full px-2 py-1"
                  >
                    edit
                  </button>
                </div>
              </div>

              {/* Business PAN */}
              {/* <div className="flex flex-col bg-transparent border-b border-[#FFF5D930] focus:outline-none w-full pb-4 mt-4">
                <label className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mb-1">
                  What’s your business PAN ?
                </label>
                <div className="flex justify-between items-center">
                  <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D9] leading-[18px]">
                    {panNumer}
                  </p>
                  <button className="text-[11px] text-[#FFF5D975] leading-[14px] bg-[#3D3D3D] rounded-full px-2 py-1">
                    edit
                  </button>
                </div>
              </div> */}

              {/* Business PAN Name */}
              {/* <div className="flex flex-col mt-4 mb-10">
                <label className="f-HelveticaNeueLight text-[14px] text-[#FFF5D975] leading-[18px] mb-1">
                  What’s your business PAN name?
                </label>
                <div className="flex justify-between items-center">
                  <p className="f-HelveticaNeueLight text-[14px] text-[#FFF5D9] leading-[18px]">
                    {panCardName}
                  </p>
                  <button className="text-[11px] text-[#FFF5D975] leading-[14px] bg-[#3D3D3D] rounded-full px-2 py-1">
                    edit
                  </button>
                </div>
              </div> */}
            </div>
            {loader ? (
              <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
                <ButtonLoader />
                {/* Loading */}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                type="button"
                className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] mt-[4rem] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
              >
                Done
              </button>
            )}
          </div>
        </UserDetailsFromLayout>
      )}
    </>
  );
};

export default ReviewYourDetails;
