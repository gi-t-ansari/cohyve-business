import React, { useState } from "react";

// Icons
import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";
import girlIcon from "../../assets/images/girlIcon.svg";
import newMessageIcon from "../../assets/images/newMessageIcon.svg";
import squareFrameIcon from "../../assets/images/squareFrameIcon.svg";
import boldTickIcon from "../../assets/images/boldTickIcon.svg";

import { FaCheck, FaTimes } from "react-icons/fa";

function MessagePreference() {
  const [isOnFirst, setIsOnFirst] = useState(false);
  const [isOnSecond, setIsOnSecond] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);

  // Button labels
  const buttonNames = [
    ["Anytime", "Weekly"],
    ["Monthly", "Snooze"],
  ];

  return (
    <div className="w-[80%] h-full overflow-y-auto custom-scrollbar scrollbar-sm">
      {/* Your message preferences */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Your message preferences
          </h4>
          <div className="w-[500px]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[14px]">
              We’ll always keep you updated with critical account information,
              but you’ll have full control over the marketing content you
              receive.
            </span>
          </div>
        </div>
      </div>

      {/* What topics do you want to hear about? */}
      <div className="px-[1.5rem] mt-[2rem]">
        <div className="mb-[1rem]">
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            What topics do you want to hear about?
          </h4>
          <div className="bg-red-600 w-full"></div>
        </div>

        {/* Toggle Box */}
        <div className="flex flex-col gap-[0.5rem]">
          {/* 1st Box */}
          <div className="w-full px-[1rem] py-[1rem] rounded-[25px] border border-[#FFFFFF17] bg-[#171717] overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1rem]">
                <div className="px-[1rem] py-[1.1rem] bg-[#212020] rounded-[18px]">
                  <img src={newMessageIcon} className="w-[2rem]" alt="" />
                </div>
                <div className="flex flex-col justify-around">
                  <p className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                    Whats New
                  </p>
                  <p className="w-[200px] f-HelveticaNeueLight text-[#fcfcd8]/50 text-[12px]">
                    Stay up to date with cohyve news and product releases
                  </p>
                </div>
              </div>

              {/* Toggle button */}
              <div className="mr-[2rem]">
                <div
                  className={`relative w-[3rem] h-[26px] flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    isOnFirst ? "bg-[#212020]" : "bg-[#212020]"
                  }`}
                  onClick={() => setIsOnFirst(!isOnFirst)}
                >
                  {/* Toggle Circle */}
                  <div
                    className={`w-5 h-5 bg-[#393939] rounded-full shadow-md flex items-center justify-center transition-transform transform ${
                      isOnFirst ? "translate-x-5" : "translate-x-0"
                    }`}
                  >
                    {/* Toggle Icon */}
                    {isOnFirst ? (
                      <img src={boldTickIcon} className="w-[0.7rem]" alt="" /> // Tick icon for "on"
                    ) : (
                      <FaTimes className="text-red-400 text-xs" /> // Cross icon for "off"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Box */}
          <div className="w-full px-[1rem] py-[1rem] rounded-[25px] border border-[#FFFFFF17] bg-[#171717] overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1rem]">
                <div className="relative px-[1rem] py-[1.1rem] bg-[#212020] rounded-[18px]">
                  <img src={girlIcon} className="w-[1.9rem]" alt="" />
                  <img
                    src={squareFrameIcon}
                    className="w-[2.6rem] absolute top-[12px] right-[10.5px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around">
                  <p className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                    Support
                  </p>
                  <p className="w-[300px] f-HelveticaNeueLight text-[#fcfcd8]/50 text-[12px]">
                    Include emails sent directly from support@cohyve.in in
                    response to support requests.
                  </p>
                </div>
              </div>

              {/* Toggle button */}
              <div className="mr-[2rem]">
                <div
                  className={`relative w-[3rem] h-[26px] flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    isOnSecond ? "bg-[#212020]" : "bg-[#212020]"
                  }`}
                  onClick={() => setIsOnSecond(!isOnSecond)}
                >
                  {/* Toggle Circle */}
                  <div
                    className={`w-5 h-5 bg-[#393939] rounded-full shadow-md flex items-center justify-center transition-transform transform ${
                      isOnSecond ? "translate-x-5" : "translate-x-0"
                    }`}
                  >
                    {/* Toggle Icon */}
                    {isOnSecond ? (
                      <img src={boldTickIcon} className="w-[0.7rem]" alt="" /> // Tick icon for "on"
                    ) : (
                      <FaTimes className="text-red-400 text-xs" /> // Cross icon for "off"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose your frequency of recurring message */}
      <div className="flex mt-[2.5rem] items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[1.3rem]">
            Choose your frequency of recurring message
          </h4>
          <div className="w-[380px] flex items-center gap-[1.5rem]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[12px]">
              hear all of it on-demand, or bundle message massage in a weekly or
              monthly capsule. Snooze reduces your notifications for 3 months
              but doesn’t opt you out.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          {buttonNames.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-[1rem]">
              {row.map((name, btnIndex) => {
                const isSelected = selectedButton === name;
                return (
                  <button
                    key={btnIndex}
                    className={`f-HelveticaNeueLight text-[14px] text-[#fcfcd8] px-[1.5rem] py-[0.6rem] rounded-[14px] overflow-hidden 
                  ${
                    isSelected
                      ? "bg-[#FFFFFF17] border border-[#2D303133]"
                      : "border border-[#FFFFFF17]"
                  } 
                  border-[#FFFFFF17]`}
                    onClick={() => setSelectedButton(name)}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessagePreference;
