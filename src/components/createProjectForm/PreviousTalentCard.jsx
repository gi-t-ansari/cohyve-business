import React from "react";
import designerNinja from "../../assets/images/designer-ninga-avatar.svg";
import adidasLogo from "../../assets/images/adidas-logo-icon.svg";
import nikeLogo from "../../assets/images/nike-logo-icon.svg";
import hAndMLogo from "../../assets/images/h&m-logo-icon.svg";

const PreviousTalentCard = ({ name, experience, isAvailable }) => {
  return (
    <div className="w-[315px] h-fit mt-4 bg-[#161616] rounded-[15px] relative p-4 pt-5">
      <div
        className={`${
          isAvailable ? "bg-[#00FB871A]" : "bg-[#F565651A]"
        } absolute right-2 top-2  flex justify-center items-center rounded-lg`}
      >
        <span
          className={` ${
            isAvailable ? "text-[#00FB87]" : "text-[#FF8E8E]"
          } p-1 px-2  text-xs`}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>
      </div>

      <div className="flex   gap-x-4">
        <div className="w-[37px]">
          <img className="w-full" src={designerNinja} alt="avatar" />
        </div>
        <div>
          <h6 className="text-sm">{name || "Designer Ninja"}</h6>
          <p className="text-xs font-thin opacity-55">
            {experience || "0-1 years of experince"}
          </p>
          <div className="flex items-center gap-x-3 mt-2">
            <span className="text-xs font-thin opacity-55">Worked with:</span>
            <div>
              <img src={nikeLogo} alt="nike" />
            </div>
            <div>
              <img src={adidasLogo} alt="adidas" />
            </div>
            <div>
              <img src={hAndMLogo} alt="h&m" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousTalentCard;
