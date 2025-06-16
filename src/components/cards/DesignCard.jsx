import React from "react";
import dummyDesignImg from "../../assets/images/dummy-design-img.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const DesignCard = ({
  designName,
  verifications,
  comments,
  handleOpenComments,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleExpandDesign = () => {
    navigate("/analytics/design");
  };

  return (
    <div className="w-fit h-fit p-4 rounded-[15px] bg-[#191919]">
      <div
        className={`relative rounded-[9px] overflow-hidden ${
          location?.search?.includes("draft")
            ? "w-[149px] h-[127px]"
            : "w-[195px] h-[166px]"
        }`}
      >
        <img className="w-full h-full" src={dummyDesignImg} alt="design" />
        <div className="absolute bottom-2 left-2 flex items-center gap-x-2">
          <p className="bg-[rgba(20,20,20,0.75)] text-[#e1ff26] p-2  rounded-lg flex items-center gap-x-1 text-xs cursor-pointer">
            <GoVerified /> {verifications}
          </p>
          <p
            className="bg-[rgba(20,20,20,0.75)] text-[#e1ff26] p-2  rounded-lg flex items-center gap-x-1 text-xs cursor-pointer"
            onClick={handleOpenComments}
          >
            <RiMessage2Line /> {comments}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs opacity-55 pt-4">
        <p>{designName}</p>
        <HiOutlineDotsVertical
          size={16}
          className="cursor-pointer"
          onClick={handleExpandDesign}
        />
      </div>
    </div>
  );
};

export default DesignCard;
