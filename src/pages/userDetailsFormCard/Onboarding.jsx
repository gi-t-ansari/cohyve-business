import React, { useState } from "react"; // 3
import '../style.css';

const Onboarding = () => {

  return (
    <>
     <div className="text-center mb-4">
          <h2 className="text-[#FFF5D9] text-[25px] leading-[30px] mt-[50px]">Onboarding Manager just for your business at ₹ 199</h2>
          <p className="f-HelveticaNeueRoman  text-[#FFF5D96E] text-[13px] leading-[12px] mt-5">
          Guaranteed full refund if you face issues with account set up
          </p>
        </div>
        <div className="bg-[#0000008A] rounded-[25px] p-4 mt-10 mb-20">
          <div className="flex items-start pt-20">
             <img src="/images/businessright.svg" alt="" />
             <p className="text-[14px] text-[#FFF5D9] leading-[18px] ml-3">Manager assigned in less than 1 hour</p>
          </div>
          <div className="flex items-start mt-2">
             <img src="/images/businessright.svg" alt="" />
             <p className="text-[14px] text-[#FFF5D9] leading-[18px] ml-3">Fast-track account set up within 8 working hours</p>
          </div>
          <div className="flex items-start mt-2">
             <img src="/images/businessright.svg" alt="" />
             <p className="text-[14px] text-[#FFF5D9] leading-[18px] ml-3">Real-time assistance during onboarding and KYC</p>
          </div>
        </div>
    </>
  );
};

export default Onboarding;