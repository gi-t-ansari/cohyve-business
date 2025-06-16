import React, { useEffect, useState } from "react";
import styles from "./userDetailsFormLayout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
// image
import cohyveLogo from "../../assets/images/cohyve_logo.svg";
import backButton from "../../assets/images/backicon.svg";

import { useSelector } from "react-redux";

// video Bg
import onbordingBg from "../../assets/videos/onbordingBg.webm";
const videoSources = [
  onbordingBg,
  onbordingBg,
  onbordingBg,
  onbordingBg,
  onbordingBg,
  onbordingBg,
  onbordingBg,
  onbordingBg,
];

const UserDetailsFromLayout = ({ children }) => {
  const trackMobileNumberPage = useSelector(
    (state) => state.trackProgressbar.trackMobileNumberPage
  );
  const trackOtpPage = useSelector(
    (state) => state.trackProgressbar.trackOtpPage
  );
  const trackNamePage = useSelector(
    (state) => state.trackProgressbar.trackNamePage
  );
  const trackRolePage = useSelector(
    (state) => state.trackProgressbar.trackRolePage
  );
  const trackWebsitePage = useSelector(
    (state) => state.trackProgressbar.trackWebsitePage
  );
  const trackBusinessTypePage = useSelector(
    (state) => state.trackProgressbar.trackBusinessTypePage
  );
  console.log(trackMobileNumberPage, trackOtpPage, trackNamePage);

  const [randomVideo, setRandomVideo] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [parts, setParts] = useState([
    trackMobileNumberPage,
    trackOtpPage,
    trackNamePage,
    trackRolePage,
    trackWebsitePage,
    trackBusinessTypePage,
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Select a random video from the list on component mount
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    setRandomVideo(videoSources[randomIndex]);

    // Delay to show the fade-in effect
    const timer = setTimeout(() => setIsVideoVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const calculateProgress = () => {
    const totalParts = parts.length;
    const completedParts = parts.filter(Boolean).length;
    return (completedParts / totalParts) * 100;
  };

  const handleBack = () => {
    if (
      !(
        location.pathname === "/verify-mobile" ||
        location.pathname === "/review-details"
      )
    ) {
      console.log(location.pathname);
      navigate(-1);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div className={`h-screen w-screen relative`}>
          {randomVideo && (
            <video
              src={randomVideo}
              autoPlay
              loop
              muted
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
                isVideoVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          <div className="h-full w-full backdrop-blur-[0.2rem]">
            <nav>
              <div className="container mx-auto relative">
                <div className="absolute left-[2rem] top-[30px]">
                  <img
                    src={cohyveLogo}
                    className="w-[10rem]"
                    alt="Cooasis Logo"
                  />
                </div>
              </div>
            </nav>
            <section className="h-full w-full bg-img flex justify-center items-center">
              <div className="">
                <div className="flex items-center justify-center relative">
                  <div>
                    {/* back button */}
                    <div className="absolute flex justify-between items-center top-[17px] left-[15px] z-20">
                      {location.pathname !== "/verify-mobile" &&
                        location.pathname !== "/review-details" && (
                          <div onClick={handleBack} className="cursor-pointer">
                            <img src={backButton} alt="Back Icon" />
                          </div>
                        )}
                      {location.pathname == "/verify-mobile" && (
                        <div className="">
                          <div className="w-[2rem] h-[2rem]"></div>
                        </div>
                      )}
                      {location.pathname == "/review-details" && (
                        <div className="">
                          <div className="w-[2rem] h-[2rem]"></div>
                        </div>
                      )}

                      <div className="ml-[10rem]">
                        {/* Progress Bar */}
                        <div className="w-[150px] h-[5px] bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
                          <div
                            className="absolute top-0 left-0 h-full rounded-md"
                            style={{
                              width: `${calculateProgress()}%`,
                              background:
                                "linear-gradient(90deg, #E1FF26 50%, #2D2D2D 100%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[430px] bg-[#0000008A] backdrop-blur-md border-[1px] border-[#FFFFFF30] py-8 px-[1rem] rounded-[2rem]">
                    {children}
                  </div>
                </div>
              </div>
              <div className="absolute right-[25px] bottom-[30px]">
                <img src="/images/headphone.svg" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsFromLayout;
