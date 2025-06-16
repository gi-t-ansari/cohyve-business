import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(30);

  return (
    <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] mt-5">
      <div className=" flex items-center gap-3">
        <span className="f-HelveticaNeueRoman text-[#FCFCD8]">
          Project brief completion
        </span>
        <div className="w-[350px] h-1 bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full rounded-md"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #E1FF26 65%, #2D2D2D 100%)",
            }}
          />
        </div>
      </div>
      <button className="f-HelveticaNeueRoman bg-[#161616] text-[#E1FF26] px-4 py-2 rounded">
        Proceed
      </button>
    </div>
  );
};

export default ProgressBar;
