import React, { useState } from "react";

// images
import homeLogo from "../../../assets/images/home.svg";
import bagLogo from "../../../assets/images/shopping-bag.svg";
import giftLogo from "../../../assets/images/gift.svg";
import activityLogo from "../../../assets/images/activity.svg";
import slidersLogo from "../../../assets/images/sliders.svg";
import bellLogo from "../../../assets/images/bell.svg";
import sunLogo from "../../../assets/images/sun.svg";

import penLogo from "../../../assets/images/pen.svg";
import squareLogo from "../../../assets/images/square.svg";
import { FiHome, FiActivity, FiSidebar } from "react-icons/fi";
import { PiChats } from "react-icons/pi";
import { IoIosColorPalette } from "react-icons/io";
import { BsWallet2 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSidebarOpen,
  sidebarSelector,
} from "../../../features/sidebarSlice";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import cohyveLogo from "../../../assets/images/cohyve-logo.png";
import cooasisLogo from "../../../assets/images/cooasis-logo-second.png";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoonOutline, IoColorPaletteOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Chip from "../../chip/Chip";
import navbarLogo from "../../../assets/images/navbar-logo.svg";
import navbarLogoText from "../../../assets/images/navbar-logo-text.svg";
import {
  IoSettingsOutline,
  IoCalendarClearOutline,
  IoChevronDown,
} from "react-icons/io5";
import cohyveLogoViolet from "../../../assets/images/cohyve-logo-violet.svg";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import avatarDummy from "../../../assets/images/avatar-dummy.svg";
import LogoutConfirmationModal from "../../modals/LogoutConfirmationModal";
import { LuBell } from "react-icons/lu";
import bigBellIcon from "../../../assets/images/bell-big.svg";

function DashboardLayoutSecond({ children }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLogoutModel, setOpenLogoutModel] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsNotificationOpen(false);
  };

  const { isSidebarOpen } = useSelector(sidebarSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(isSidebarOpen, isSidebarLocked);

  const { pathname } = useLocation();

  const toggleNotificationBox = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsMenuOpen(false);
  };

  const handleSidebarLock = () => {
    // if (isSidebarOpen) {
    //   dispatch(setIsSidebarOpen(false));
    // } else {
    //   dispatch(setIsSidebarOpen(true));
    // }
    setIsSidebarLocked((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (isSidebarLocked) return;
    dispatch(setIsSidebarOpen(true));
  };

  const handleMouseLeave = () => {
    if (isSidebarLocked) return;
    dispatch(setIsSidebarOpen(false));
  };

  const MENU_ITEMS = [
    {
      name: "home",
      url: "/home",
      icon: FiHome,
    },
    {
      name: "messages",
      url: "/messages",
      icon: PiChats,
    },
    {
      name: "analytics",
      url: "/analytics",
      icon: FiActivity,
    },
    {
      name: "designs",
      url: "/designs",
      icon: IoColorPaletteOutline,
    },
    {
      name: "credits",
      url: "/credits/pan-setup",
      icon: BsWallet2,
    },
    {
      name: "meetings",
      url: "/meetings",
      icon: IoCalendarClearOutline,
    },
  ];

  const handleGoToWallet = (e) => {
    e.preventDefault();
    navigate("/credits/wallet");
  };

  const handleNavigateToProfile = (e) => {
    e.preventDefault();
    navigate("/settings");
  };

  const handleOpenLogoutModal = (e) => {
    e.preventDefault();
    setOpenLogoutModel(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#050505] text-[#FCFCD8] flex">
      {/**------SIDEBAR--------- */}
      <Sidebar
        collapsed={!isSidebarOpen}
        className="my-sidebar z-0 "
        // className={`${isSidebarOpen ? "w-[10%]" : "w-[5%]"} h-full `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#050505",
            overflow: "visible",
          },
        }}
        width="13%"
        collapsedWidth="5%"
        style={{ borderRight: "none" }}
      >
        {/**-------- SIDEBAR LOCK --------- */}
        {isSidebarOpen && (
          <div
            className="absolute -right-11 top-6 z-50"
            onClick={handleSidebarLock}
          >
            <div
              className={`w-11 h-11 relative rounded-full flex justify-center items-center  bg-[#151515] cursor-pointer `}
            >
              <FiSidebar
                size={20}
                className={`${
                  isSidebarLocked ? "opacity-100" : "opacity-55"
                } transition-all duration-300 ease-linear`}
              />
              <FaAngleRight
                size={8}
                className={`absolute right-4 ${
                  !isSidebarOpen && "rotate-180"
                } ${
                  isSidebarLocked ? "opacity-100" : "opacity-55"
                } transition-all duration-300 ease-linear`}
              />
            </div>
          </div>
        )}
        {/**---------- SIDEBAR LOGO --------- */}
        <div
          className={`w-full h-[13%] flex justify-center items-center gap-x-2 `}
        >
          <img width={29.51} src={navbarLogo} alt="logo" />
          {isSidebarOpen && (
            <>
              <img width={72.48} src={navbarLogoText} alt="logo-text" />
              <p className="text-[10px] border-[#222221] border rounded-full p-2 py-1 bg-gradient-to-r from-[#a15fff]   to-[#ff8e8e]  bg-clip-text text-transparent">
                Alpha
              </p>
            </>
          )}
        </div>
        <div
          className={`w-full h-[87%] flex flex-col ${
            isSidebarOpen ? "items-start" : "items-center"
          } justify-between `}
        >
          <div
            className={`flex flex-col ${
              isSidebarOpen ? "items-start px-4" : "items-center"
            } gap-y-[1rem] `}
          >
            {MENU_ITEMS.map((ele, index) => {
              return (
                <Link key={index} to={ele?.url}>
                  {isSidebarOpen ? (
                    <div
                      className={`${
                        pathname?.includes(ele?.name) && "bg-[#141414] "
                      } flex items-center  rounded-xl hover:bg-[#141414] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out w-40`}
                    >
                      <div
                        key={index}
                        className={`p-[0.8rem] ${
                          pathname?.includes(ele?.name) &&
                          "glow-effect-container"
                        } `}
                      >
                        <ele.icon
                          size={20}
                          className={`transition-all duration-500 ease-in-out ${
                            pathname?.includes(ele?.name)
                              ? "text-glow glow-effect-icon scale-110"
                              : "text-[#424e50]"
                          }`}
                        />
                      </div>
                      <p
                        className={`first-letter:uppercase ${
                          !pathname?.includes(ele?.name) && "opacity-55"
                        }`}
                      >
                        {ele.name}
                      </p>
                      {index === 4 && (
                        <p className="text-[10px] ml-2 border-[#222221] border rounded-full p-2 py-1 bg-gradient-to-r from-[#a15fff]   to-[#ff8e8e]  bg-clip-text text-transparent">
                          Alpha
                        </p>
                      )}
                    </div>
                  ) : (
                    <div
                      className={` ${
                        pathname?.includes(ele?.name) &&
                        " rounded-xl bg-[#141414]"
                      }`}
                    >
                      <div
                        key={index}
                        className={`p-[0.8rem] ${
                          pathname?.includes(ele?.name)
                            ? "glow-effect-container bg-[#141414]"
                            : ""
                        }   cursor-pointer transition-all duration-500 ease-in-out`}
                      >
                        <ele.icon
                          size={20}
                          className={`transition-all duration-500 ease-in-out ${
                            pathname?.includes(ele?.name)
                              ? "text-glow glow-effect-icon scale-110"
                              : "text-[#424e50]"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          <div
            className={`flex items-center mb-[1.5rem] ${
              isSidebarOpen && "pl-4 gap-x-2"
            }`}
          >
            <div className="p-[0.8rem] border border-[#222221] bg-[#141414] rounded-xl cursor-pointer">
              <IoSettingsOutline size={20} className="text-[#424e50]" />
            </div>
            {isSidebarOpen && <p className="opacity-55">Setting</p>}
          </div>
        </div>
      </Sidebar>

      <div className={`flex-1 overflow-hidden h-full`}>
        {/*------- NAVBAR ------- */}

        <nav
          className={`w-full pr-[2rem] ${
            isSidebarOpen ? "pl-[3.5rem]" : " pl-2"
          } h-[13%] flex justify-between items-center z-20`}
          // className={`w-full pr-[2rem] pl-2 h-[13%] flex justify-between items-center`}
        >
          {/* <div className="flex items-center gap-x-4">
              <div
                className="w-11 h-11 relative rounded-full flex justify-center items-center opacity-55 bg-[#151515] cursor-pointer"
                onClick={handleSidebarLock}
              >
                <FiSidebar size={20} />
                <FaAngleRight size={8} className="absolute right-4" />
              </div> */}
          <div>
            <h1 className="f-HelveticaNeueRoman text-[17px] text-[#FCFCD8] leading-[1rem] tracking-tight">
              Business Portal
            </h1>
            <p className="f-HelveticaNeueLight text-[14px] opacity-55">
              Here's an overview of your Cooasis activity
            </p>
          </div>
          {/* </div> */}

          {/* right */}
          <div className="flex gap-x-4">
            <div
              className="flex cursor-pointer items-center gap-x-3  relative p-[1px] rounded-full"
              style={{
                background:
                  "linear-gradient(98.06deg, rgba(255, 255, 255, 0.2) -11.85%, rgba(165, 165, 165, 0.062) 105.09%)",
              }}
              onClick={handleGoToWallet}
            >
              <div className="flex items-center gap-x-2 px-4 py-[11px] bg-[#050505] rounded-full w-full h-full">
                <img width={22} src={cohyveLogoViolet} alt="logo" />
                <span className="text-sm">Wallet</span>
              </div>
            </div>

            {/*----------------------- USER NOTIFICATIONS AND NOTIFICATION CARD --------------------------*/}
            <div
              className="relative w-[40px] h-[40px] p-2 rounded-full bg-[#2D303133]/80 cursor-pointer"
              onClick={toggleNotificationBox}
            >
              <img className="w-[25px] h-[25px]" src={bellLogo} alt="bell" />
              <div className="absolute top-0 right-[-2px] w-[16px] h-[15px] flex justify-center items-center rounded-full bg-[#43DCAE]">
                <span className="text-[12px] font-semibold">2</span>
              </div>

              {/*-------------------------- NOTIFICATION CARD----------------------- */}
              <div
                style={{
                  backdropFilter: "blur(30px)",
                  background: "#1F1F1FA8",
                }}
                className={`absolute flex flex-col overflow-hidden w-[427px] h-[500px] cursor-default rounded-[25px] px-[19px] py-6 top-14 z-10 -right-[5.5rem]
                    transition-all duration-300 ease-linear transform ${
                      isNotificationOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
              >
                <header className="h-fit w-full">
                  <h5 className="text-xl">Notifications</h5>
                  <div className="w-full flex justify-between items-center text-sm  rounded-[10px] bg-[#1F1F1F] h-[42px] px-3 my-3">
                    <div className="flex items-center gap-x-[23px]">
                      <div className="flex items-center gap-x-[7px]">
                        <span>All</span>
                        <p className="bg-[#262626] px-[7px] py-[2px] rounded-3xl">
                          {"0"}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[7px] ">
                        <span className="opacity-50">Unread</span>
                        <p className="bg-[#262626] opacity-50 px-[7px] py-[2px] rounded-3xl">
                          {"0"}
                        </p>
                      </div>
                    </div>
                    <p className="opacity-10 cursor-not-allowed">
                      Mark all as read
                    </p>
                  </div>
                </header>
                <div className="flex-1 flex justify-center items-center overflow-y-auto custom-scrollbar scrollbar-sm">
                  <div className="flex flex-col items-center">
                    {/* <LuBell size={48} /> */}
                    <img width={93} src={bigBellIcon} alt="bell-icon" />
                    <p className="text-xl opacity-50 text-center">
                      This is where your notification <br /> will appear
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*------------------- USER PROFILE AND MENU CARD ----------------------*/}
            <div
              className="flex gap-x-[9px] relative items-center cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="bg-[#151515] rounded-full border-[1px] border-[#FFFFFF14] h-[43px] w-[43px] flex justify-center items-center">
                <span>C</span>
              </div>
              <IoChevronDown
                className={`text-[#e1ff26] ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-300 ease-linear`}
              />
              {/**--------------------------- MENU CARD ----------------------------- */}
              <div
                style={{
                  backdropFilter: "blur(30px)",
                  background: "#1F1F1FA8",
                }}
                className={`absolute w-[280px] h-fit cursor-default rounded-[25px] px-[22px] py-[21px] top-14 z-10 right-6 
                    transition-all duration-300 ease-linear transform ${
                      isMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
              >
                <header className="flex items-center gap-x-4">
                  <div className="h-[42px] w-[42px] rounded-[12.5px] overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={avatarDummy}
                      alt="Rupesh Kumar"
                    />
                  </div>
                  <div>
                    <h6 className="text-[17px] leading-none">Rupesh Kumar</h6>
                    <p className="text-sm opacity-50 font-light ">
                      rupesh@cooasis.in
                    </p>
                  </div>
                </header>
                <div className="flex flex-col gap-y-[10px] my-8">
                  <p
                    onClick={handleNavigateToProfile}
                    className="opacity-50 text-[15px] cursor-pointer font-light hover:opacity-100 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear"
                  >
                    Setting
                  </p>
                  <p className="opacity-50 text-[15px] cursor-pointer font-light hover:opacity-100 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear">
                    Refer Friends
                  </p>
                  <p className="opacity-50 text-[15px] cursor-pointer font-light hover:opacity-100 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear">
                    Report Content
                  </p>
                  <p className="opacity-50 text-[15px] cursor-pointer font-light hover:opacity-100 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear">
                    Suggest Improvement
                  </p>
                  <p className="opacity-50 text-[15px] cursor-pointer font-light hover:opacity-100 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear">
                    Privacy Policy
                  </p>
                  <p
                    onClick={handleOpenLogoutModal}
                    className="text-red-300  text-[15px] cursor-pointer font-light hover:text-red-500 hover:transform hover:-translate-y-1 transition-all duration-300 ease-linear"
                  >
                    Signout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-full h-[87%] bg-[#0d0e0e] text-[#fcfcd8] overflow-hidden rounded-tl-[33px] border border-[#171818]">
          {children}
        </div>
      </div>
      <LogoutConfirmationModal
        open={openLogoutModel}
        onClose={() => setOpenLogoutModel(false)}
      />
    </div>
  );
}

export default DashboardLayoutSecond;
