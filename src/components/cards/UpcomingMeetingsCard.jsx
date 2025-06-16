import React from "react";
import MeetingCard from "./MeetingCard";
import calendarIcon from "../../assets/images/calendar-icon.png";

import { IoCalendarOutline } from "react-icons/io5";

const UpcomingMeetingsCard = ({ meetings }) => {
  return (
    <div className="h-[27%] p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <header className="flex h-[10%] justify-between  items-center ">
        <h5 className="text-lg">Upcoming meetings</h5>
        {meetings > 0 && (
          <p className="text-sm opacity-55 font-thin cursor-pointer">
            View All
          </p>
        )}
      </header>

      {meetings ? (
        <div className="h-[78%] mt-2 pt-1 overflow-y-auto pr-2 custom-scrollbar scrollbar-sm">
          {[1, 2].map((ele, item) => (
            <MeetingCard meetingSubject={"Follow-up call"} />
          ))}
        </div>
      ) : (
        <div className="flex h-[78%] flex-col justify-center items-center   gap-y-2">
          <div className="p-3 rounded-full border border-[#141414] ">
            <div className="p-2 rounded-full border border-[#141414]">
              {/* <img src={calendarIcon} alt="calendar" width={20} /> */}
              <IoCalendarOutline className="text-[#e1ff26]" size={24} />
            </div>
          </div>

          <p className="text-sm opacity-55 font-thin text-wrap ">
            No meetings ! You’ll see all your schedule here!
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingMeetingsCard;
