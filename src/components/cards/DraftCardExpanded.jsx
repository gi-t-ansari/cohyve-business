import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import DesignCard from "./DesignCard";
import CommentsCard from "./CommentsCard";

const DraftCardExpanded = ({
  selectedDraft,
  setTabIndex,
  draftName,
  projectName,
  deadline,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [showComments, setShowComments] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleCloseDraft = (e) => {
    e.preventDefault();
    setTabIndex(3);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("draft");
    navigate(`/analytics?${newSearchParams.toString()}`);
  };

  const handleOpenComments = (id) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("comments", id);
    navigate(`/analytics?${newSearchParams.toString()}`);
    setSelectedDesign(id);
    setShowComments(true);
  };

  return (
    <div className="w-full h-full py-2 flex flex-col relative">
      <header className="flex h-fit w-full justify-between">
        <h6 className="px-4 py-1 border border-[#20201e] bg-[#121212] rounded-lg w-fit text-sm opacity-55">
          {draftName || `Draft ${selectedDraft}`}
        </h6>
        <IoMdClose
          size={17}
          className="text-[#e1ff26] cursor-pointer"
          onClick={handleCloseDraft}
        />
      </header>
      <div className="my-5 h-fit w-full">
        <h2 className="text-lg mb-2">{projectName || "Illustration Design"}</h2>
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
      <div className="flex-1 grid grid-cols-3 gap-4 pr-2 mt-6 overflow-y-auto custom-scrollbar scrollbar-sm">
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <DesignCard
            key={ele}
            designName={"Illustration draft2.png"}
            verifications={2}
            comments={2}
            handleOpenComments={() => handleOpenComments(ele)}
          />
        ))}
      </div>

      <CommentsCard
        setShowComments={setShowComments}
        setSelectedDesign={setSelectedDesign}
        showComments={showComments}
      />
    </div>
  );
};

export default DraftCardExpanded;
