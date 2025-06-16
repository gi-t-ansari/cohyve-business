import React from "react";
import Skeleton from "react-loading-skeleton";

const GetPremiumCardSkeleton = () => {
  return (
    <div className="h-[42%] p-4 bg-[#050505] rounded-3xl flex flex-col justify-between ">
      <h1>
        <Skeleton height={30} width={200} />
        <Skeleton height={30} width={250} />
        <Skeleton height={30} width={210} />
      </h1>
      <div>
        <Skeleton width={200} height={47} />
      </div>
    </div>
  );
};

export default GetPremiumCardSkeleton;
