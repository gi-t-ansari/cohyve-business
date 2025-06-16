import React from "react";
import tickIcon from "../../assets/images/tic-icon.svg";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ProjectTypeCard = ({ projectType, watch, register, ind }) => {
  return (
    <label
      className={`relative w-[24%] h-52 flex flex-col justify-between rounded-2xl p-6 cursor-pointer overflow-hidden bg-[#191919]`}
    >
      <input
        type="radio"
        value={projectType?.name}
        {...register("projectType")}
        className="hidden"
      />
      <div
        className={`w-[19px] h-[19px] absolute right-3 top-3 ${
          watch("projectType") !== projectType?.name &&
          "border-2 rounded-full border-[#282525]"
        } `}
      >
        {watch("projectType") === projectType?.name && (
          <div className="h-full w-full flex justify-center items-center rounded-full bg-[#111111]">
            <img src={tickIcon} alt="tick" />
          </div>
        )}
      </div>
      {ind === 0 && (
        <div className="relative w-fit">
          <projectType.image size={40} className="text-[#353535]" />
          <FaIndianRupeeSign className="text-[#e1ff26] absolute bottom-1 font-bold left-1/2 -translate-x-1/2" />
        </div>
      )}
      {ind === 1 && (
        <div className="relative w-fit">
          <img width={27} src={projectType.image} alt="rupee-collection" />
        </div>
      )}
      <div>
        <h5 className="text-sm mb-3">{projectType?.name}</h5>
        <p className="text-xs opacity-55 font-thin">
          Hire an expert for a defined project scope, deliverable, or milestone
        </p>
      </div>
    </label>
  );
};

export default ProjectTypeCard;
