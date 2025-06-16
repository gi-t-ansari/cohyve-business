import moment from "moment";
import React from "react";
import Avatar from "../avatar/Avatar";

const MeetingCard = ({
  meetingDate,
  meetingSubject,
  startTime,
  endTime,
  attendees,
}) => {
  return (
    <div className="w-full h-fit bg-[#141414] rounded-2xl p-3 flex  gap-x-4 mb-3 cursor-pointer">
      <div className="px-2 py-1 w-16 h-16 rounded-lg flex flex-col justify-center items-center bg-[#232323]">
        <p className="text-sm">{moment(meetingDate).format("MMM")}</p>
        <h5 className="text-4xl">{moment(meetingDate).format("D")}</h5>
      </div>
      <div>
        <h6>{meetingSubject}</h6>
        <p className="text-xs opacity-55">{`${moment(startTime).format(
          "HH:mm"
        )} - ${moment(endTime).format("HH:mm")}`}</p>
        <div className="flex gap-x-4 items-center mt-1">
          <div className="flex">
            {[1, 2, 3].map((ele, ind) => (
              <Avatar size={20} ind={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
