import React from "react";

import { useSelector } from "react-redux";

function Kyc() {
  const data = useSelector((state) => state.rolesPermissions.invitePeople);
  console.log(data);

  return (
    <div className="w-[80%] h-full px-[1.5rem]">
      {/* Your KYC is up to date  */}
      <div className="flex items-center justify-between ">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Your KYC is up to date
          </h4>
          <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
            Your business is successfully verified.
          </span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>
    </div>
  );
}

export default Kyc;
