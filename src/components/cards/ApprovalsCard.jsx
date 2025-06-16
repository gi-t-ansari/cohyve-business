import React from "react";
import ApprovalProjectCard from "./ApprovalProjectCard";
import { LuBell } from "react-icons/lu";

const ApprovalsCard = ({ approvals }) => {
  return (
    <div className="basis-[32%] h-full p-4 bg-[#050505] rounded-[30px]">
      <header className="flex justify-between items-center h-[15%]">
        <div className="flex items-center gap-x-2">
          <h5 className="text-lg">Pending Approvals</h5>
          <p className="bg-[#292727] text-xs px-2 py-0.5 rounded-full">
            {approvals ? approvals : 0}
          </p>
        </div>
        {approvals && (
          <p className="text-xs opacity-55 cursor-pointer font-thin">
            View All
          </p>
        )}
      </header>
      <div className="mt-4 relative h-[85%]">
        {approvals ? (
          <>
            <ApprovalProjectCard
              projectName={"Food Website UI"}
              deadline={new Date().getDate()}
            />
            <div className="w-[90%] bg-[#1a1a1a] p-3 z-20 rounded-3xl absolute bottom-7 left-[50%] -translate-x-[50%]"></div>
            <div className="w-[85%] bg-[#1f1f1f] p-3 z-10 rounded-3xl absolute bottom-5 left-[50%] -translate-x-[50%]"></div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-full gap-y-2">
            <div className="p-4 rounded-full border border-[#141414] -mt-4">
              <div className="p-2 rounded-full border border-[#141414]">
                <div className="p-4 rounded-full border border-[#141414]">
                  <LuBell className="text-[#e1ff26]" size={29} />
                </div>
              </div>
            </div>

            <p className="text-sm opacity-55 font-thin ">
              Hurray! No pending approval!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovalsCard;
