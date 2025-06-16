import React from "react";
import logoImg2 from "../../assets/images/logo-img-2.png";

const GetPremiumCard = () => {
  return (
    // <div className="h-[42%] p-4 bg-[#050505] rounded-3xl flex flex-col justify-between ">
    //   <h1 className="text-4xl tracking-tight">
    //     Get{" "}
    //     <span className="bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent">
    //       premium
    //     </span>{" "}
    //     <br />
    //     to manage more <br />
    //     than 100 projects
    //   </h1>
    //   <div className="w-fit rounded-2xl cursor-pointer bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent flex items-center gap-x-2 px-4 py-2 mt-10 bg-[#141414] border border-[#292929] ">
    //     <img src={logoImg2} alt="logo" width={22} />
    //     <p>Get 3 Months Free</p>
    //   </div>
    // </div>
    <div className="flex-1 p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <h1 className="text-4xl tracking-tight">
        Get{" "}
        <span className="bg-gradient-to-r from-[#FFE67B] via-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent">
          premium
        </span>{" "}
        <br />
        to manage more <br />
        than 100 projects
      </h1>
      <div className="w-fit rounded-2xl cursor-pointer bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent flex items-center gap-x-2 px-4 py-2 mt-10 bg-[#141414] border border-[#292929] ">
        <img src={logoImg2} alt="logo" width={22} />
        <p>Get 3 Months Free</p>
      </div>
    </div>
  );
};

export default GetPremiumCard;
