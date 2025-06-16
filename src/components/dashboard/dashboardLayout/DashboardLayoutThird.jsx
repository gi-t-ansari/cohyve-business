import React, { useState } from "react";

// Ions
import circleIcon from "../../../assets/images/circleIcon.svg";
import profileIcon from "../../../assets/images/profileIcon.svg";
import correctIcon from "../../../assets/images/correctIcon.svg";
import discoveryIcon from "../../../assets/images/discoveryIcon.svg";
import securityIcon from "../../../assets/images/securityIcon.svg";
import messageIcon from "../../../assets/images/messageIcon.svg";
import roleIcon from "../../../assets/images/roleIcon.svg";
import subscriptionIcon from "../../../assets/images/subscriptionIcon.svg";
import kycIcon from "../../../assets/images/kycIcon.svg";
import profileLogo from "../../../assets/images/profileCooasisLogo.svg";

// Dashboard Settings components
import AccountInformation from "../../../pages/dashboardSettings/AccountInformation";
import BusinessInformation from "../../../pages/dashboardSettings/BusinessInformation";
import LoginSecurity from "../../../pages/dashboardSettings/LoginSecurity";
import RolesPermissions from "../../../pages/dashboardSettings/RolesPermissions";
import MessagePreference from "../../../pages/dashboardSettings/MessagePreference";
import Subscription from "../../../pages/dashboardSettings/Subscription";
import Kyc from "../../../pages/dashboardSettings/Kyc";
import ChangeProfilePictureModal from "../../modals/ChangeProfilePictureModal";
import DashboardLayoutSecond from "./DashbordLayoutSecond";

function DashboardLayoutThird() {
  const [openChangeProfilePictureModal, setOpenChangeProfilePictureModal] =
    useState(false);
  const [profilePictureSrc, setProfilePictureSrc] = useState(null);
  const [selectedItem, setSelectedItem] = useState("item1");

  // Menu Handler
  const handleSelected = (itemId) => {
    setSelectedItem(itemId);
  };

  // Menu Component
  const componentsMap = {
    item1: <AccountInformation />,
    item2: <BusinessInformation />,
    item3: <LoginSecurity />,
    item4: <RolesPermissions />,
    item5: <MessagePreference />,
    item6: <Subscription />,
    item7: <Kyc />,
  };

  const handleChangeProfilePicture = () => {
    setOpenChangeProfilePictureModal(true);
  };
  // console.log(profilePictureSrc);

  return (
    <DashboardLayoutSecond>
      <div className="w-full h-full flex bg-[#0d0e0e] text-[#fcfcd8] overflow-hidden rounded-tl-[33px] border border-[#171818]">
        {/* right side */}

        <div className="w-[25%] h-full ml-[1.5rem] mt-[1rem] flex flex-col gap-[0.5rem]">
          {/* Section-1 */}
          <div className="w-full py-[1.3rem] px-[1.3rem] bg-[#050505] rounded-3xl flex flex-col justify-center items-center">
            <div
              className={`bg-[#171717] flex justify-center items-center  w-24 h-24  overflow-hidden rounded-full`}
            >
              <img
                src={profilePictureSrc || profileLogo}
                className={`${
                  !profilePictureSrc ? "w-[1.5rem] h-[1.5rem]" : "w-full h-full"
                }`}
                alt=""
              />
            </div>

            <div
              className="bg-[#171717] mt-[0.5rem] mb-[2rem] inline-block px-[8px] py-[4px] rounded-3xl cursor-pointer"
              onClick={handleChangeProfilePicture}
            >
              <span className="f-HelveticaNeueLight flex justify-center items-center text-[#fcfcd8] text-[12px]">
                Change Profile
              </span>
            </div>

            {/* Item 1 */}
            <div
              onClick={() => handleSelected("item1")}
              className={`w-full flex px-[0.5rem] py-[0.5rem] mb-[2px] border border-[#050505] cursor-pointer hover:bg-[#171717]  justify-between items-cente ${
                selectedItem === "item1"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={profileIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Account Information
                </span>
              </div>
              <img src={circleIcon} className="w-[1.3rem]" alt="" />
            </div>

            {/* Item 2 */}
            <div
              onClick={() => handleSelected("item2")}
              className={`w-full flex px-[0.6rem] mb-[2px] border border-[#050505] cursor-pointer hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item2"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={discoveryIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Business Information
                </span>
              </div>
              <img src={correctIcon} className="w-[1.3rem]" alt="" />
            </div>
          </div>

          {/* Section-2 */}
          <div className="w-full py-[1.3rem] px-[1.3rem] bg-[#050505] rounded-3xl flex flex-col justify-center items-center">
            {/* Item -3 */}
            <div
              onClick={() => handleSelected("item3")}
              className={`w-full flex px-[0.6rem] mb-[2px] border border-[#050505] cursor-pointer hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item3"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={securityIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Login & Security
                </span>
              </div>
            </div>

            {/* Item-4 */}
            <div
              onClick={() => handleSelected("item4")}
              className={`w-full flex px-[0.6rem] mb-[2px] border border-[#050505] cursor-pointer hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item4"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={roleIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Roles & Permissions
                </span>
              </div>
            </div>

            {/* Item-5 */}
            <div
              onClick={() => handleSelected("item5")}
              className={`w-full flex px-[0.6rem] cursor-pointer border border-[#050505] hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item5"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={messageIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Message Preference
                </span>
              </div>
            </div>
          </div>

          {/* Section-3 */}
          <div className="w-full py-[1.3rem] px-[1.3rem] bg-[#050505] rounded-3xl flex flex-col justify-center items-center">
            {/* Item-6 */}
            <div
              onClick={() => handleSelected("item6")}
              className={`w-full flex px-[0.6rem] mb-[2px] cursor-pointer border border-[#050505] hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item6"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={subscriptionIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  Subscription
                </span>
              </div>
              <img src={circleIcon} className="w-[1.3rem]" alt="" />
            </div>

            {/* Item-7 */}
            <div
              onClick={() => handleSelected("item7")}
              className={`w-full flex px-[0.6rem] cursor-pointer border border-[#050505] hover:bg-[#171717] py-[0.5rem] justify-between items-cente ${
                selectedItem === "item7"
                  ? "border border-[#FFFFFF17] bg-[#171717]"
                  : ""
              } rounded-[13px] overflow-hidden`}
            >
              <div className="flex justify-between items-center gap-[0.5rem] ">
                <img src={kycIcon} className="w-[1.3rem]" alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[12px]">
                  KYC
                </span>
              </div>
              <img src={circleIcon} className="w-[1.3rem]" alt="" />
            </div>
          </div>
        </div>

        {/* Left side */}
        <div className="w-[75%] h-full ml-[5rem] mt-[3rem]">
          {componentsMap[selectedItem]}
        </div>
      </div>
      <ChangeProfilePictureModal
        open={openChangeProfilePictureModal}
        onClose={() => setOpenChangeProfilePictureModal(false)}
        setProfilePictureSrc={setProfilePictureSrc}
      />
    </DashboardLayoutSecond>
  );
}

export default DashboardLayoutThird;
