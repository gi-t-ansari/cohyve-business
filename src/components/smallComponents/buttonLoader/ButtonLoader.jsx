import React from "react";

function ButtonLoader() {
  return (
    <div
      className="w-[20px] h-[20px] border-[3px] border-t-transparent border-[#E1FF26] rounded-full animate-spin"
      style={{
        maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
      }}
    ></div>
  );
}

export default ButtonLoader;
