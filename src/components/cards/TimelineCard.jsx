import moment from "moment";
import React, { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import TimelineChip from "../chip/TimelineChip";

const today = moment();

const TimelineCard = () => {
  const [startDate, setStartDate] = useState(moment());

  const handlePrevious = () => {
    setStartDate(startDate.clone().subtract(1, "days"));
  };

  const handleNext = () => {
    setStartDate(startDate.clone().add(1, "days"));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full h-fit opacity-55 flex gap-x-2 items-center font-thin ">
        <IoMdArrowBack
          size={16}
          className="cursor-pointer basis-[5%]"
          onClick={handlePrevious}
        />

        <div className="flex justify-between  basis-[90%]">
          {[0, 1, 2, 3].map((ele) => (
            <p key={ele} className="w-[22.5%] text-center">
              {startDate.clone().add(ele, "days").format("MMMM DD")}
            </p>
          ))}
        </div>

        <IoMdArrowForward
          size={16}
          className="cursor-pointer basis-[5%]"
          onClick={handleNext}
        />
      </header>
      <div className="w-full flex-1 mt-2 pr-2 overflow-y-auto custom-scrollbar scrollbar-sm">
        {Array(24)
          .fill(0)
          .map((ele, ind) => (
            <div className="h-10 flex justify-between items-start">
              <p className="text-xs opacity-55 font-thin basis-[7%]">
                {moment("00", "HH").add(ind, "hours").format("hh A")}
              </p>
              <div className="basis-[93%] flex overflow-hidden h-full border-t border-[#1e1e1a] mt-2">
                <div className="h-full basis-[8%] "></div>
                <div className="h-full basis-[26%] border-l border-dashed border-[#1e1e1a]">
                  {moment(today).isSame(moment(today).add(0, "day")) &&
                    ind === 8 && (
                      <TimelineChip text={"Received Project Request"} />
                    )}
                  {moment(today).isSame(moment(today).add(0, "day")) &&
                    ind === 11 && (
                      <TimelineChip text={"Initial call with manager"} />
                    )}
                  {moment(today).isSame(moment(today).add(0, "day")) &&
                    ind === 12 && <TimelineChip text={"Creator Assigned"} />}
                </div>
                <div className="h-full basis-[26%] border-l border-dashed border-[#1e1e1a]">
                  {moment(today).isSame(moment(today).add(0, "day")) &&
                    ind === 10 && <TimelineChip text={"Project Initiated"} />}
                </div>
                <div className="h-full basis-[26%] border-l border-dashed border-[#1e1e1a]">
                  {moment(today).isSame(moment(today).add(0, "day")) &&
                    ind === 12 && <TimelineChip text={"First Draft Shared"} />}
                </div>
                <div className="h-full basis-[5%] border-l border-dashed border-[#1e1e1a]"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimelineCard;
