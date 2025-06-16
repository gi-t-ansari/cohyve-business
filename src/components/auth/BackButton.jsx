import React from "react";
import { useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (!(location.pathname === "/" || location.pathname === "/signin")) {
      navigate("/");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleBackClick}
        className="absolute left-[-1.5rem] top-[13rem] p-[11px] backdrop-blur-sm bg-white/20 rounded-full"
      >
        <SlArrowLeft className="text-white" />
      </button>
    </div>
  );
}

export default BackButton;
