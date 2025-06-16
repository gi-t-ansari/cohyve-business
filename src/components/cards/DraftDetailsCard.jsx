import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import moment from "moment";
import DesignCard from "./DesignCard";
import { useNavigate } from "react-router-dom";

const DraftDetailsCard = ({
  draftName,
  projectName,
  deadline,
  projectId,
  draftId,
}) => {
  const navigate = useNavigate();

  const handleOpenDraft = (e) => {
    e.preventDefault();
    navigate(`/analytics?project=${projectId}&draft=${draftId}`);
  };

  return (
    <div
      className="w-full  h-fit px-6 py-5 rounded-2xl bg-[#141414] flex justify-between items-center cursor-pointer"
      onClick={handleOpenDraft}
    >
      <div className="basis-[30%]">
        <h6 className="px-4 py-1 mb-6 border border-[#20201e] rounded-lg w-fit text-sm opacity-55">
          {draftName}
        </h6>
        <h2 className="text-lg my-5">{projectName}</h2>
        <p className="text-sm opacity-55 mb-3">Request to:</p>
        <p className="flex items-center gap-x-2">
          <FaRegStar size={12} className="text-[#e1ff26]" />
          <span className="text-sm opacity-55">Approve One</span>
        </p>
        <p className="flex items-center gap-x-2 my-1">
          <MdOutlineWatchLater size={12} className="text-[#e1ff26]" />
          <span className="text-sm opacity-55 ">
            By {moment(deadline).format("MMM DD, YYYY")}
          </span>
        </p>
        <p className="flex items-center gap-x-2">
          <LuUser2 size={12} className="text-[#e1ff26]" />
          <span className="text-sm opacity-55">Assigned by cooasis</span>
        </p>
      </div>
      <div className="basis-[60%]  flex gap-x-3 overflow-x-auto custom-scrollbar scrollbar-sm pb-2 ">
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <DesignCard
            key={ele}
            designName={"Illustration draft2.png"}
            verifications={2}
            comments={2}
          />
        ))}
      </div>
    </div>
  );
};

export default DraftDetailsCard;
