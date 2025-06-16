import React from "react";
import tickIcon from "../../assets/images/tic-icon.svg";
import { FaIndianRupeeSign } from "react-icons/fa6";

const CreatorExperienceCard = ({ creator, watch, register, ind }) => {
  return (
    <label
      className={`relative h-fit w-[350px] flex justify-between items-center rounded-2xl px-4 py-3.5  cursor-pointer overflow-hidden bg-[#050505]`}
    >
      <input
        type="radio"
        value={creator?.experience}
        {...register("designerLevel")}
        className="hidden"
      />
      <div>
        <p className="text-[15px] ">
          {ind === 3 ? (
            <>
              <span
                className="bg-clip-text text-transparent font-medium"
                style={{
                  background:
                    "linear-gradient(90deg, #FF8E8E 0%, #7D22FF 43%, #7D22FF 81.6%, #7D22FF 89.6%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {creator?.experience?.split(" ")[0]}
              </span>{" "}
              <span>{creator?.experience?.split(" ")[1]}</span>
            </>
          ) : (
            <span>{creator?.experience}</span>
          )}
          <span className="opacity-55 font-thin">{`( ${creator?.projectCount} )`}</span>
        </p>
      </div>
      <div
        className={`w-[19px] h-[19px] ${
          watch("designerLevel") !== creator?.experience &&
          "border-2 rounded-full border-[#282525]"
        } `}
      >
        {watch("designerLevel") === creator?.experience && (
          <div className="h-full w-full flex justify-center items-center rounded-full bg-[#111111]">
            <img src={tickIcon} alt="tick" />
          </div>
        )}
      </div>
    </label>
  );
};

export default CreatorExperienceCard;
