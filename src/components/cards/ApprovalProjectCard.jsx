import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import moment from "moment";

const ApprovalProjectCard = ({ projectName, deadline }) => {
  return (
    <div className="w-full absolute top-0 z-30 p-3 bg-[#141414] rounded-3xl">
      <div className="w-full">
        <h5 className="text-sm">{projectName}</h5>
        <p className="text-xs opacity-55 font-thin my-1">Request to:</p>
        <div className="text-xs flex justify-between items-center">
          <p className="flex items-center gap-x-1">
            <TiStarOutline size={14} className="text-[#e1ff26]" /> Select
            Favorites
          </p>
          <p className="flex items-center gap-x-1">
            <MdOutlineWatchLater size={14} className="text-[#e1ff26]" />{" "}
            {moment(deadline).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>

      <button className="w-full mt-2 text-xs text-center bg-[#1c2016] text-[#e1ff26] py-2 rounded-xl">
        Start Review
      </button>
    </div>
  );
};

export default ApprovalProjectCard;
