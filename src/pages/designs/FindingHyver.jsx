import React, { useEffect, useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
// import Loader from "../loader/Loader";
import cohyveLogo from "../../assets/images/cohyve-logo.svg";

const FindingHyver = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayoutSecond>
      <div className="h-full w-full">
        <div className="w-[19px] h-[19px] absolute left-[65%] top-[20%] rounded-full bg-[#111111]"></div>
        <div className="w-[19px] h-[19px] absolute left-[65%] top-[30%] rounded-full bg-[#111111]"></div>
        <div className="w-[19px] h-[19px] absolute left-[45%] top-[30%] rounded-full bg-[#111111]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-20 h-20 ">
            <img className="animate-spin-slow" src={cohyveLogo} alt="logo" />
          </div>
          <h5 className="text-2xl my-4">Finding the best hyver for you</h5>
          <div className="w-72 h-[6px] relative overflow-hidden mt-4 rounded-full bg-[#FFFFFF2B]">
            <div
              className="h-full absolute left-0 transition-all duration-[5000ms]"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(89.99deg, #0008FC 1%, #7D22FF 47%, rgba(255, 82, 102, 0) 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
};

export default FindingHyver;
