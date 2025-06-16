import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setDuration } from "../../features/briefingCallSlice";

const ConsultationCard = ({ consultation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    dispatch(setDuration(consultation?.duration));
    navigate("/select-datetime");
  };

  return (
    <div className="w-[382px] h-fit p-7 rounded-[16.5px] bg-[#1C1C1CB5]">
      <h2 className="text-3xl">{consultation?.name}</h2>
      <p className="text-[15px] my-5">{`${consultation?.duration} Mins`}</p>
      <p className="text-[15px] opacity-55 font-thin">
        {consultation?.description}
      </p>
      <button
        className="mt-6 py-2 px-6 text-[#e1ff26] bg-[#222222] rounded-[10px] text-[15px]"
        onClick={handleNavigate}
      >
        Select
      </button>
    </div>
  );
};

export default ConsultationCard;
