import React, { useState } from "react";

// images
import cooasisLogo from "../../../assets/images/dashboard-cooasis.svg";
import homeLogo from "../../../assets/images/home.svg";
import bagLogo from "../../../assets/images/shopping-bag.svg";
import giftLogo from "../../../assets/images/gift.svg";
import activityLogo from "../../../assets/images/activity.svg";
import slidersLogo from "../../../assets/images/sliders.svg";
import bellLogo from "../../../assets/images/bell.svg";
import sunLogo from "../../../assets/images/sun.svg";

import penLogo from "../../../assets/images/pen.svg";
import squareLogo from "../../../assets/images/square.svg";

function DashboardLayout({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const toggleNotificationBox = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const logos = [homeLogo, bagLogo, giftLogo, activityLogo, slidersLogo];
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#050505]">
        {/* Navbar */}
        <nav className="px-[2rem] h-[13%] flex justify-between items-center">
          <div className="flex gap-[3rem]">
            <img src={cooasisLogo} alt="cooasis" />
            <div>
              <h1 className="f-HelveticaNeueRoman text-[17px] text-[#FCFCD8] leading-[1rem] tracking-tight">
                Business Portal
              </h1>
              <p className="f-HelveticaNeueLight text-[14px] text-[#5A7A80E5]">
                Here's an overview of your Cooasis activity
              </p>
            </div>
          </div>

          {/* right */}
          <div className="flex gap-[1rem]">
            {/* bell */}
            <div
              className="relative w-[40px] h-[40px] p-2 rounded-full bg-[#2D303133]/80 cursor-pointer"
              onClick={toggleNotificationBox}
            >
              <img className="w-[25px] h-[25px]" src={bellLogo} alt="bell" />
              <div className="absolute top-0 right-[-2px] w-[16px] h-[15px] flex justify-center items-center rounded-full bg-[#43DCAE]">
                <span className="text-[12px] font-semibold">2</span>
              </div>

              {/* Notification Box */}
              {isNotificationVisible && (
                <div className="absolute top-[3rem] right-0 w-[200px] bg-[#FCFCD8] shadow-lg p-[1rem] rounded-lg">
                  <p className="text-[14px] text-[#000]">
                    You have 2 new notifications
                  </p>
                  <ul className="text-[12px] text-[#333]">
                    <li className="py-[0.3rem]">Notification 1</li>
                    <li className="py-[0.3rem]">Notification 2</li>
                  </ul>
                </div>
              )}
            </div>

            {/* user icon */}
            <div className="w-[40px] h-[40px] p-2 flex justify-center items-center rounded-full bg-[#2D303133]/80">
              <span className="f-PowerGrotesk text-[1.3rem] text-[#FCFCD8]">
                C
              </span>
            </div>
          </div>
        </nav>

        {/* Menubar and main contant */}
        <div className="w-full h-[87%] flex ">
          {/* menubar */}
          <div className="w-[7.5rem] flex flex-col items-center justify-between">
            <div className="flex flex-col gap-[2rem] items-center">
              {logos.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className={`p-[0.8rem] ${
                      selectedIndex === index ? "bg-[#2D303133]/80" : ""
                    }  rounded-xl border border-[#7B7B7B17]/20 cursor-pointer`}
                    onClick={() => handleClick(index)}
                  >
                    <img className="w-[24px] h-[24px]" src={ele} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center mb-[1.5rem]">
              <div className="p-[0.8rem] bg-[#2D303133]/80 border border-[#7B7B7B17]/20 rounded-xl">
                <img className="w-[24px] h-[24px]" src={sunLogo} alt="" />
              </div>
            </div>
          </div>

          <div className="h-full w-[92%] flex overflow-hidden rounded-tl-[2.4rem] border border-[#7B7B7B17]/20 bg-[#2D303133]/30">
            <div className="w-[15%] h-full flex flex-col gap-[1rem] px-[1.2rem] py-[1.5rem] border-r border-[#7B7B7B17]/20">
              {[1, 2, 3, 4, 5, 6, 7].map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="bg-black/70 pl-[1rem] py-[0.7rem] flex justify-start gap-[1rem] rounded-[1rem]"
                  >
                    <img className="w-[14px] h-auto" src={penLogo} alt="" />
                    <div className="flex flex-col">
                      <span className="f-HelveticaNeueLight text-[13px] text-[#FCFCD8] tracking-tight leading-[1rem]">
                        Service
                      </span>
                      <span className="f-HelveticaNeueLight text-[13px] text-[#FCFCD8] tracking-tight leading-[1rem]">
                        illustration
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[85%] h-full">
              {/* Children */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
