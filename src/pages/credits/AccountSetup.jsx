import React from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import { IoMdInformationCircleOutline } from "react-icons/io";
import PanDetailsForm from "../../components/panDetailsForm/PanDetailsForm";
import cardImg from "../../assets/images/card in hand.png";

const AccountSetup = () => {
  return (
    <DashboardLayoutSecond>
      <div className="bg-[#0d0e0e] w-full h-full rounded-tl-[38px] flex pt-6">
        <div className="px-5 basis-[60%]">
          <p className="text-[#fcfcd8] text-2xl">Set up your account to get</p>
          <h1 className="text-5xl  bg-gradient-to-r from-[#7D22FF] via-[#FF8E8E] to-[#FFE67B] bg-clip-text text-transparent my-4">
            Free Credit of Worth INR 50000*
          </h1>
          <p className="text-[#fcfcd8] font-thin flex items-center gap-x-2 opacity-50 tracking-[-1px] mb-4">
            <IoMdInformationCircleOutline size={20} />
            Use the credit limit to create a project instantly then pay back in
            a month.
          </p>
          <PanDetailsForm />
        </div>
        <div className="basis-[30%] h-full ">
          <img
            src={cardImg}
            alt="credit-card"
            className="w-full h-full object-contain scale-125 relative bottom-16"
          />
        </div>
      </div>
    </DashboardLayoutSecond>
  );
};

export default AccountSetup;
