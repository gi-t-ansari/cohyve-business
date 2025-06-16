import React from "react";
import Skeleton from "react-loading-skeleton";

const UpcomingMeetingsCardSkeleton = () => {
  return (
    <div className="h-[27%] p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <header className="flex h-[10%] justify-between  items-center ">
        <h5>
          <Skeleton width={150} height={20} />
        </h5>
        <p>
          <Skeleton width={50} height={15} />
        </p>
      </header>

      <div className="h-[78%]  overflow-y-auto pr-2 custom-scrollbar scrollbar-sm">
        <div className="w-full h-fit bg-[#141414] rounded-2xl p-2 flex  gap-x-4 cursor-pointer">
          <div className="px-2 py-1 w-16 h-16 rounded-lg flex flex-col justify-center items-center bg-[#232323]">
            <p>
              <Skeleton width={30} height={15} />
            </p>
            <h5>
              <Skeleton width={43} height={20} />
            </h5>
          </div>
          <div>
            <h6>
              <Skeleton width={150} height={18} />
            </h6>
            <p>
              <Skeleton width={100} height={12} />
            </p>

            <div className="flex gap-x-4 items-center ">
              <p>
                <Skeleton height={12} width={60} />
              </p>
              <div className="flex">
                {[1, 2, 3].map((ele, ind) => (
                  <Skeleton circle width={22} height={22} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetingsCardSkeleton;
