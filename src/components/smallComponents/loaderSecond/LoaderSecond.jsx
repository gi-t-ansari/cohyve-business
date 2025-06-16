import React from "react";
import DashboardLayoutSecond from "../../dashboard/dashboardLayout/DashbordLayoutSecond";
import styles from "./loader.module.css";

import circleLogo from "../../../assets/images/circleLogo.svg";

function LoaderSecond() {
  return (
    <DashboardLayoutSecond>
      <div className="w-full h-full">
        <div className="w-full h-[100%] flex flex-col justify-center items-center bg-gradient-to-b from-black/80 via-black/80">
          <img
            src={circleLogo}
            className="w-[4rem] h-[4rem] animate-spin-slow"
            alt=""
          />
          <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[1.2rem] mt-[0.7rem]">
            Setting up things for you...
          </p>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
}

export default LoaderSecond;
