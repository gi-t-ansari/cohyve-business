import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectDetailsCardSkeleton = () => {
  return (
    <div className="w-full h-full">
      <header className="h-fit">
        <div className="flex justify-between items-center text-sm opacity-55 ">
          <p>
            <Skeleton width={200} height={20} />
          </p>
          <p>
            <Skeleton width={150} height={20} />
          </p>
        </div>
        <div className="py-4 h-fit flex justify-between items-center">
          <h1>
            <Skeleton width={150} height={36} />
          </h1>
          <div className="flex items-center gap-x-4">
            <div className="flex">
              <Skeleton circle width={30} height={30} />
              <Skeleton circle width={30} height={30} />
              <Skeleton circle width={30} height={30} />
            </div>
            <p>
              <Skeleton width={100} height={35} />
            </p>
          </div>
        </div>
      </header>
      <section className="w-full h-[80%]">
        {/**---------- TABS ------------- */}
        <div className="flex h-fit gap-x-10 pt-6 pb-1 border-b-2 border-[#292929]">
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={20} />
        </div>
        <div className="pt-4 w-full h-[88%] ">
          <div className=" w-full h-full ">
            <div>
              <h5>
                <Skeleton height={20} width={150} />
              </h5>
              <p className="my-6 ">
                <Skeleton count={4} />
              </p>
            </div>
            <div>
              <h5>
                <Skeleton height={20} width={150} />
              </h5>
              <p className="mt-6">
                <Skeleton count={4} />
              </p>
            </div>
            <p>
              <Skeleton />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsCardSkeleton;
