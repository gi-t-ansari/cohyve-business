import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import celebrationImg from "../../assets/images/celebration-img.png";
import creditCardImg from "../../assets/images/card in hand.png";
import { useNavigate } from "react-router-dom";

const CreditsCongratulations = () => {
  const [creditLimit, setCreditLimit] = useState(50000);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/credits/wallet");
  };
  return (
    <DashboardLayoutSecond>
      <div
        className="bg-[#0d0e0e] w-full h-full rounded-tl-[38px]  pt-6 bg-contain bg-center flex flex-col items-center relative"
        style={{ backgroundImage: `url(${celebrationImg})` }}
      >
        <p className="text-2xl tracking-[-1px] text-[#fcfcd8]">
          Congratulations! You’ve got an approved credit limit of
        </p>
        <h1 className="text-8xl  bg-gradient-to-r from-[#7D22FF] via-[#FF8E8E] to-[#FFE67B] bg-clip-text text-transparent my-4">
          INR {creditLimit}*
        </h1>

        <img
          src={creditCardImg}
          alt="credit-card-img"
          className=" object-cover w-[20%] relative -top-56 scale-105"
        />
        <button
          className=" py-3 px-20  text-center rounded-xl text-[#e1ff26] backdrop-blur-[20px]  absolute bottom-16"
          onClick={handleClick}
        >
          Go to wallet
        </button>
      </div>
    </DashboardLayoutSecond>
  );
};

export default CreditsCongratulations;
