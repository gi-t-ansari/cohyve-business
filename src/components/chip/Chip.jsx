import React from "react";

const Chip = ({ bgCol, textCol, text }) => {
  return (
    <div
      className={`text-[11px] px-3 pb-0.5 rounded-full bg-[${bgCol}] text-[${textCol}] w-fit`}
    >
      {text}
    </div>
  );
};

export default Chip;
