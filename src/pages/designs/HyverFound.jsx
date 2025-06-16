import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import verifiedSolidIcon from "../../assets/images/verified-icon-solid.svg";
import CreatorCard from "../../components/cards/CreatorCard";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const HyverFound = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e?.preventDefault();
    navigate("/select-datetime");
  };

  return (
    <DashboardLayoutSecond>
      <Confetti />
      <div className="w-full h-full relative">
        <div className="w-[381px] h-fit absolute left-1/2 -translate-x-1/2 top-10 bg-[#050505] border-[0.5px] border-[#FFFFFF21] rounded-[30px]">
          <div className="flex justify-end mt-4 mr-4">
            <div className="bg-[#1c1c1c] flex  gap-x-2 items-center p-2 py-1 rounded-md">
              <div className="h-1 w-1 rounded-full bg-[#e1ff26]"></div>
              <p className="text-xs">Project Live</p>
            </div>
          </div>
          <div className="flex flex-col items-center px-4 pb-4">
            <div className="w-[41px] h-[41px]">
              <img
                className="w-full h-full"
                src={verifiedSolidIcon}
                alt="verified"
              />
            </div>
            <h2 className="text-2xl my-4">Congratulations</h2>
            <p className="text-xs opacity-55 font-thin text-center ">
              Your project is live and the creator has been assigned. <br /> Now
              sit back and relax your content is cooking.
            </p>
            <CreatorCard />
            <button
              className={`w-full py-3 mt-4 rounded-[15px] bg-[#161616] text-[#e1ff26] text-[15px]`}
              onClick={handleNavigate}
            >
              Initiate Brief Call
            </button>
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
};

export default HyverFound;
