import React from "react";
import tickIcon from "../../assets/images/tic-icon.svg";

const ProjectStyleCard = ({ style, watch, register }) => {
  return (
    <label
      className={`relative flex flex-col justify-end w-[24%] h-48 rounded-2xl  cursor-pointer overflow-hidden  bg-cover bg-center ${
        watch("projectStyle") === style?.name && "ring-4 ring-[#292929]"
      }`}
      style={{
        backgroundImage: `url(${style.image})`,
      }}
    >
      <input
        type="radio"
        value={style?.name}
        {...register("projectStyle")}
        className="hidden"
      />
      <div
        className="absolute inset-0 flex justify-end"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 29.36%, rgba(0, 0, 0, 0.64) 63.68%, #000000 100%)",
        }}
      >
        {watch("projectStyle") === style?.name && (
          <div className="h-[19px] w-[19px] flex justify-center items-center rounded-full bg-[#111111] mt-2 mr-2">
            <img src={tickIcon} alt="tick" />
          </div>
        )}
      </div>
      <div className="flex justify-between items-end px-4 pb-3 sticky bottom-0">
        <h6 className="text-sm">{style?.name}</h6>
      </div>
    </label>
  );
};

export default ProjectStyleCard;
