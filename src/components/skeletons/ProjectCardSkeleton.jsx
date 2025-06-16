import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectCardSkeleton = () => {
  return (
    <div className={`w-full h-fit p-4 rounded-3xl bg-[#050505]`}>
      <header>
        <p>
          <Skeleton width={"30%"} />
        </p>
        <div className="my-2 flex justify-between items-center">
          <div className=" flex  items-center gap-x-2">
            <div>
              <Skeleton width={50} height={50} />
            </div>
            <p>
              <Skeleton width={100} count={2} />
            </p>
          </div>
          <p>
            <Skeleton width={100} height={30} />
          </p>
        </div>
      </header>
      <section className="my-6">
        <p>
          <Skeleton height={20} />
        </p>
        <div className="my-6">
          <p className="text-sm font-thin opacity-55 mb-1 ">
            <Skeleton width={50} />
          </p>
          <div className="flex">
            <Skeleton circle width={24} height={24} />
            <Skeleton circle width={24} height={24} />
            <Skeleton circle width={24} height={24} />
          </div>
        </div>
        <p>
          <Skeleton width={"60%"} height={20} />
        </p>
      </section>
      <div className="flex justify-between ">
        <Skeleton width={120} height={30} />
        <Skeleton width={120} height={30} />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
