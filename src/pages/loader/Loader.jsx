import React from "react";
import styles from "../../components/smallComponents/loaderSecond/loader.module.css";

import circleLogo from "../../assets/images/circleLogo.svg";

function Loader() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-black/80 via-black/80">
        <img
          src={circleLogo}
          className="w-[4rem] h-[4rem] object-cover animate-spin-slow"
          alt=""
        />
        <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[1.2rem] mt-[0.7rem]">
          Setting up things for you...
        </p>
      </div>
    </div>
  );
}

export default Loader;
