import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

// components
import SubscriptionPlan from "./SubscriptionPlan";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

// Icons
import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";

// Images
import zara from "../../assets/images/zara.svg";
import nike from "../../assets/images/nike.svg";
import adidas from "../../assets/images/adidas.svg";
import hm from "../../assets/images/hm.svg";
import versace from "../../assets/images/versace.svg";

function Subscription() {
  const [isSubscriptionPlan, setIsSubscriptionPlan] = useState(false);
  const [loading, setLoading] = useState(false);

  const benefits = [
    "Superfast turnaround time",
    "Unlimited Designs",
    "Manage everything at one place",
    "Work with top 1% talent Pan India",
  ];

  // Handler
  const handleSubscription = () => {
    setLoading(true); // Start loading state
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
      setIsSubscriptionPlan(true); // Navigate to SubscriptionPlan
    }, 3000); // 3 seconds delay
  };

  if (isSubscriptionPlan) {
    return <SubscriptionPlan />;
  }

  return (
    <div className="w-[80%] h-full px-[1.5rem]">
      {/* Subscription */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Subscription
          </h4>
          <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
            Manage your Cohyve subscription and billing information
          </span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Premium Text */}
      <div className="mb-[1.5rem]">
        <p className="w-[300px] f-HelveticaNeueLight leading-[1.9rem] text-[#fcfcd8] text-[2.1rem]">
          Get{" "}
          <span className="f-HelveticaNeueRoman text-[2.1rem] bg-gradient-to-r from-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent">
            premium
          </span>
        </p>
        <p className="w-[400px] f-HelveticaNeueLight leading-[1.9rem] text-[#fcfcd8] text-[2.1rem]">
          to manage more than 10 projects
        </p>
      </div>

      <div className="w-[350px]">
        <p className=" f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
          Access the world’s best talent network and future proof your talent
          strategy.
        </p>
      </div>

      <div className="my-[2rem]">
        {loading ? (
          <button
            onClick={handleSubscription}
            className="f-HelveticaNeueRoman text-[14px] px-[4.6rem] py-[0.63rem] rounded-[14px] border border-[#FFFFFF17] bg-[#141414] bg-gradient-to-r from-[#FFD938] via-[#FF7373] to-[#A755FF] bg-clip-text text-transparent overflow-hidden"
          >
            {<ButtonLoader />}
          </button>
        ) : (
          <button
            onClick={handleSubscription}
            className="f-HelveticaNeueRoman text-[14px] px-[1.5rem] py-[0.6rem] rounded-[14px] border border-[#FFFFFF17] bg-[#141414] bg-gradient-to-r from-[#FFD938] via-[#FF7373] to-[#A755FF] bg-clip-text text-transparent overflow-hidden"
          >
            Get 3 Months Free
          </button>
        )}
      </div>

      <div className="text-[#FFF5D9] flex flex-wrap gap-3">
        {benefits.map((benefit, index) => (
          <div className="flex items-center" key={index}>
            <p className="p-[2px] bg-gray-700 rounded-full mr-[6px]">
              <IoCheckmark className="text-[#E1FF26] text-[14px]" />
            </p>
            <span className="text-[13px] f-HelveticaNeueRoman">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="mt-[2.3rem]">
        <span className="f-HelveticaNeueRoman text-[#FFF5D9] text-[14px]">
          Trusted By 200+ teams
        </span>
        <div className="flex gap-[2.1rem] mt-[1rem]">
          <img src={zara} className="w-[1.8rem]" alt="" />
          <img src={nike} className="w-[1.8rem]" alt="" />
          <img src={adidas} className="w-[1.8rem]" alt="" />
          <img src={hm} className="w-[1.8rem]" alt="" />
          <img src={versace} className="w-[1.8rem]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
