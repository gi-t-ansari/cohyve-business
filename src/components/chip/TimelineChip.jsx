import React from "react";

const TimelineChip = ({ text }) => {
  return (
    <div className="w-full h-full relative rounded-2xl bg-[#141414] border border-[#242422] overflow-hidden flex justify-center">
      <div className="flex items-center w-[80%] h-full gap-x-2">
        <div className="h-2 w-2 mt-0.5 rounded-full bg-[#e1ff26]"></div>
        <p className="text-[11px]">{text}</p>
      </div>
      <div
        className="absolute h-[1px] w-[80%] top-0 left-1/2 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(252, 252, 216, 0) 0%, #e1ff26 50%, rgba(252, 252, 216, 0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default TimelineChip;
