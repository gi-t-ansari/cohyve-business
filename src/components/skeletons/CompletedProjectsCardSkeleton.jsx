import React from "react";
import Skeleton from "react-loading-skeleton";

const CompletedProjectsCardSkeleton = () => {
  return (
    <div className="w-full h-[26%]  p-4 bg-[#050505] rounded-3xl">
      <h5>
        <Skeleton width={155} height={18} />
      </h5>

      <div className="w-full border opacity-55 mt-2"></div>
      <div className="w-full h-[70%] overflow-y-auto mt-2 pr-2 custom-scrollbar scrollbar-sm">
        {[1, 2].map((ele, ind) => (
          <div className="flex items-center justify-between py-3  border-b border-[#292929]">
            <p>
              <Skeleton width={150} height={14} />
            </p>
            <p>
              <Skeleton width={70} height={14} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjectsCardSkeleton;
