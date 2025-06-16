import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { useSelector } from "react-redux";
import { meetingSelector } from "../../features/meetingSlice";
import { LuCalendar, LuVideo, LuCopy } from "react-icons/lu";
import moment from "moment";
import { PiUsersThree } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import worldIcon from "../../assets/images/world-icon.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import editIcon from "../../assets/images/edit-icon.svg";

const MeetingScheduledModal = ({ open, onClose, meetingData }) => {
  const handleEditMeeting = (e) => {
    e.preventDefault();
    console.log("Edit Meeting");
  };

  const handleCopyLink = (e) => {
    e.preventDefault();
    console.log("Meeting Link Copied");
  };
  return (
    <ModalLayout open={open} onClose={onClose}>
      <div className="w-full h-fit">
        <div className="flex px-[13px] py-2.5 w-fit rounded-[10px] bg-[#161616] gap-x-2 items-center text-[#e1ff26]">
          <LuVideo size={15} />
          <p className="text-[11px]">Successfully Scheduled</p>
        </div>

        <div className="flex my-5 gap-x-4 flex-1 items-center ">
          <div className="w-[73px] h-[71px] rounded-lg overflow-hidden text-center bg-[#232323]  flex flex-col">
            <p className="bg-[#353434] text-sm h-fit font-thin">
              {moment(new Date()).format("MMM")}
            </p>
            <h5 className="flex-1  text-4xl  mt-1">
              {moment(new Date()).format("DD")}
            </h5>
          </div>
          <p className="text-wrap text-lg w-[50%] first-letter:uppercase">
            {meetingData?.eventTitle || "Project Discussion"}
          </p>
        </div>

        <div className="flex gap-x-3 mb-2 items-center">
          <PiUsersThree size={20} />
          <div>
            <span>Rupesh Kumar, Tanzeel, ABhishek</span>
            {meetingData?.guests?.map((ele) => (
              <span>{`, ${ele}`} </span>
            ))}
          </div>
        </div>
        <div className="flex gap-x-3 mb-2 items-center">
          <CiCalendar size={20} />

          <span>
            3:30 pm - 4:30 pm,{" "}
            {moment(new Date()).format("dddd, MMMM DD, YYYY")}
          </span>
        </div>
        <div className="flex gap-x-3.5 ml-0.5 mb-2 items-center">
          <img width={16} height={16} src={worldIcon} alt="world-icon" />

          <span>Asia/Kolkata</span>
        </div>
      </div>
      <div className="flex gap-x-3 mb-2 items-center">
        <HiOutlineMenuAlt2 size={20} />

        <span>{meetingData?.notes || "Description"}</span>
      </div>
      <div className="w-[486px] mt-10">
        <button
          className="w-full flex justify-center gap-x-2 items-center text-center py-[15px] bg-[#161616]  rounded-[15px] mb-2"
          onClick={handleEditMeeting}
        >
          <img src={editIcon} alt="edit-icon" />
          <span>Edit Event</span>
        </button>
        <button
          className="w-full flex justify-center gap-x-2 items-center text-center py-[15px] bg-[#161616] text-[#e1ff26] rounded-[15px]"
          onClick={handleCopyLink}
        >
          <LuCopy size={14} /> <span>Copy Meeting Link</span>
        </button>
      </div>
    </ModalLayout>
  );
};

export default MeetingScheduledModal;
