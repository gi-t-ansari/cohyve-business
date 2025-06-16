import React, { useState } from "react";
import designerNinja from "../../assets/images/designer-ninga-avatar.svg";
import adidasLogo from "../../assets/images/adidas-logo-icon.svg";
import nikeLogo from "../../assets/images/nike-logo-icon.svg";
import hAndMLogo from "../../assets/images/h&m-logo-icon.svg";
import { FiMessageSquare, FiPhoneCall } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import tickIcon from "../../assets/images/tic-icon.svg";

const CreatorCard = ({ name, experience, manager, managerNumber }) => {
  const [showNumber, setShowNumber] = useState(false);
  const [isNumberCopied, setIsNumberCopied] = useState(false);

  const handleShowNumber = (e) => {
    e.preventDefault();
    setShowNumber(true);
    setTimeout(() => {
      setShowNumber(false);
    }, 9000);
  };

  const handleCopyNumber = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(managerNumber || "+91-8210470098");
    setIsNumberCopied(true);
    setTimeout(() => {
      setIsNumberCopied(false);
    }, 3000);
  };

  return (
    <div className="w-full h-fit mt-4 bg-[#161616] rounded-[15px] relative p-4 pt-5">
      <div className="bg-[#262626] absolute right-2 top-2  flex justify-center items-center rounded-lg">
        <span className="text-transparent p-1 px-2  text-xs bg-clip-text bg-gradient-to-r from-[#FF8E8E] to-[#7D22FF]">
          aspiring designer
        </span>
      </div>

      <div className="flex px-2  gap-x-4">
        <div className="w-[37px]">
          <img className="w-full" src={designerNinja} alt="avatar" />
        </div>
        <div>
          <h6 className="text-sm">{name || "Designer Ninja"}</h6>
          <p className="text-xs opacity-55">
            {experience || "0-1 years of experince"}
          </p>
          <div className="flex items-center gap-x-3 mt-2">
            <span className="text-xs opacity-55">Worked with:</span>
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
      <div className="w-full border-b-[0.5px] border-dashed border-[#FCFCD817] my-5 "></div>
      <div>
        <div className="text-xs">
          <p className="opacity-55">Dedicated Manager:</p>
          <h6>{manager || "Paul John"}</h6>
        </div>
        <div className={`flex justify-between  items-center mt-2`}>
          <p className="text-xs">Managed 50+ Projects</p>

          <div className="flex items-center gap-x-3">
            <button className="w-20 py-2  bg-[#3A3A3A70] rounded-lg text-xs flex justify-center items-center gap-x-2">
              <FiMessageSquare className="text-[#e1ff26]" size={12} /> Chat
            </button>
            <button
              className="w-20 py-2 bg-[#3A3A3A70] rounded-lg text-xs flex justify-center items-center gap-x-2"
              onClick={handleShowNumber}
            >
              <FiPhoneCall className="text-[#e1ff26]" size={12} /> Call
            </button>
          </div>
        </div>
        {showNumber && (
          <div className="flex justify-end items-center gap-x-1 pr-5 mt-1">
            <p className="text-sm opacity-55">
              {managerNumber || "+91 - 8210470098"}
            </p>
            {!isNumberCopied && (
              <IoCopyOutline
                size={15}
                className="opacity-55 cursor-pointer"
                onClick={handleCopyNumber}
              />
            )}
            {isNumberCopied && (
              <div className="h-[19px] w-[19px] flex justify-center items-center rounded-full bg-[#111111]">
                <img src={tickIcon} alt="tick" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorCard;
