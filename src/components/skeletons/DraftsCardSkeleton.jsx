import React from "react";
import Skeleton from "react-loading-skeleton";

const DraftsCardSkeleton = () => {
  return (
    <div className="basis-[32%] h-full p-4 bg-[#050505] rounded-3xl flex flex-col justify-around">
      <header className="flex justify-between items-center h-[15%]">
        <div className="flex items-center gap-x-2">
          <h5>
            <Skeleton width={100} height={22} />
          </h5>
          <p>
            <Skeleton width={30} height={22} />
          </p>
        </div>

        <p>
          <Skeleton width={60} height={18} />
        </p>
      </header>
      <div className="h-[65%] flex flex-col  justify-center p-4 bg-[#141414] rounded-2xl">
        <div className="flex items-center gap-x-2">
          <Skeleton width={48} height={48} />
          <div>
            <Skeleton width={100} height={16} />
            <Skeleton width={60} height={12} />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Skeleton width={100} height={30} />
          <Skeleton width={100} height={30} />
        </div>
      </div>
    </div>
  );
};

export default DraftsCardSkeleton;
