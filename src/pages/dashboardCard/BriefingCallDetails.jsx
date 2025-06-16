import React, { useState, useEffect } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import Confetti from "react-confetti";

// Images
import circleLogo from "../../assets/images/circleLogo.svg";
import videoVector from "../../assets/images/video-vector.svg";
import calendarVector from "../../assets/images/calendar-vector.svg";
import globeVector from "../../assets/images/globe-vector.svg";
import tickVector from "../../assets/images/tick-vector.svg";
import personVector from "../../assets/images/person-vector.svg";

// redux
import { useSelector } from "react-redux";

function BriefingCallDetails() {
  const date = useSelector((state) => state.briefingCall.date);
  const timeZone = useSelector((state) => state.briefingCall.timeZone);
  const timeSlot = useSelector((state) => state.briefingCall.timeSlot);
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayoutSecond>
      {/* Confetti effect */}
      {isConfettiActive && <Confetti />}

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-[400px] bg-[#050505] py-[1.5rem] rounded-3xl border border-[#7B7B7B17]/20">
          <div className="flex flex-col items-center px-[5rem]">
            <div className="bg-[#111111] p-[0.7rem] border border-[#7B7B7B17]/20 rounded-full">
              <img src={circleLogo} className="w-[2rem] h-[2rem]" alt="" />
            </div>

            <div className="flex gap-[0.5rem] mt-[1rem]">
              <img src={tickVector} alt="" />
              <h2 className="f-HelveticaNeueLight text-[25px] text-[#FCFCD8]">
                You’re scheduled
              </h2>
            </div>

            <p className="f-HelveticaNeueLight text-[13px] text-[#737373] text-center mt-[0.6rem]">
              A calendar invitation has been sent to your email address.
            </p>
          </div>
          <div className="flex justify-center items-center my-[1rem]">
            <hr className="border-t-1 border-[#737373]/40 border-dashed w-[80%]" />
          </div>

          <div className="text-white px-[2rem]">
            <h4 className="f-HelveticaNeueLight text-[#FCFCD8] text-[1.1rem] mb-[1.5rem]">
              Briefing Call
            </h4>

            <div className="flex gap-[8px] mb-[0.5rem]">
              <img
                src={personVector}
                className="text-[#FCFCD8] w-[17px]"
                alt=""
              />
              <span className="f-HelveticaNeueLight text-[#FCFCD8]/60 text-[14px]">
                Paul Jhon
              </span>
            </div>

            <div className="flex gap-[8px] mb-[0.5rem]">
              <img
                src={calendarVector}
                className="text-[#FCFCD8] w-[17px]"
                alt=""
              />
              <span className="f-HelveticaNeueLight text-[#FCFCD8]/60 text-[14px]">
                {timeSlot}, {date}
              </span>
            </div>

            <div className="flex gap-[8px] mb-[0.5rem]">
              <img
                src={globeVector}
                className="text-[#FCFCD8] w-[17px]"
                alt=""
              />
              <span className="f-HelveticaNeueLight text-[#FCFCD8]/60 text-[14px]">
                {timeZone}
              </span>
            </div>

            <div className="flex gap-[8px] mb-[2rem]">
              <img
                src={videoVector}
                className="text-[#FCFCD8] w-[17px]"
                alt=""
              />
              <span className="f-HelveticaNeueLight text-[#FCFCD8]/60 text-[14px]">
                Web conferencing details to follow.
              </span>
            </div>

            <button className="w-full f-HelveticaNeueLight text-[#E1FF26] text-[14px] bg-[#161616] py-[0.8rem] rounded-lg">
              Back to home
            </button>
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
}

export default BriefingCallDetails;
