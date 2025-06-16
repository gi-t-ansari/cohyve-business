import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsClipboardMinus } from "react-icons/bs";

const DraftProjectCard = ({ projectName, projectType }) => {
  return (
    <div className="w-full absolute top-0 z-30 p-3 bg-[#141414] rounded-3xl">
      <div className="flex items-center gap-x-2">
        <div className="p-4 bg-[#2b2020] text-[#f56565] rounded-2xl">
          <BsClipboardMinus size={24} />
        </div>
        <div>
          <h5 className="text-sm">{projectName}</h5>
          <p className="text-xs opacity-55 font-thin">{projectType}</p>
        </div>
      </div>
      <div className="w-full flex justify-between mt-3">
        <button className="flex basis-[48%] text-xs items-center gap-x-1 justify-center bg-[#1b1a1a] py-2 rounded-xl">
          <AiOutlineEdit size={14} /> Edit Draft
        </button>
        <button className="basis-[48%] text-xs text-center bg-[#1c2016] text-[#e1ff26] py-2 rounded-xl">
          View
        </button>
      </div>
    </div>
  );
};

export default DraftProjectCard;
