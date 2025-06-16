import React from "react";

// Icons
import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";

function SubscriptionPlan() {
  return (
    <div className="w-[80%] h-full px-[1.5rem]">
      {/* Subscription */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Subscription
          </h4>
          <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
            Manage your Cohyve subscription and billing information
          </span>
        </div>

        <div className="flex gap-[0.5rem]">
          <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]">
            <span className="f-HelveticaNeueLight text-[#FF8E8E] text-[13px]">
              Cancel Subscription
            </span>
          </div>
          <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]">
            <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[13px]">
              Manage Payments
            </span>
          </div>
        </div>
      </div>

      {/* Border line */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Current Plan */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Subscription
          </h4>
        </div>

        <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]">
          <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[13px]">
            Change Plan
          </span>
        </div>
      </div>
      {/* Box */}
      <div className="flex gap-[1rem] mt-[1.2rem]">
        {/* Box 1 */}
        <div className="w-full py-[2rem] px-[2rem] bg-[#050505] rounded-3xl">
          <div className="relative">
            <p className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[13px]">
              3 Months Plan
            </p>
            <span className="f-HelveticaNeueRoman text-[17px] bg-gradient-to-r from-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent">
              Cohyve Premium
            </span>

            <div className="flex absolute top-[-1rem] right-[-1rem]">
              <div className="flex items-center justify-center gap-[7px] px-[0.6rem] py-[0.3rem] rounded-[9px] cursor-pointer bg-[#171717]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#E1FF26]"></div>
                <span className="f-HelveticaNeueLight text-[#E1FF26] text-[12px]">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full py-[2rem] px-[2rem] bg-[#050505] rounded-3xl">
          <div className="">
            <p className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[13px]">
              Renew at
            </p>
            <span className="f-HelveticaNeueRoman text-[17px] text-[#FCFCD8]">
              Jan 16, 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlan;
