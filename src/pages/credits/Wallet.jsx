import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import { GoPlus } from "react-icons/go";
import mastercard from "../../assets/images/Mastercard.png";
import dummyCard from "../../assets/images/dummy-card.png";
import logoImg from "../../assets/images/logo-img.png";
import cooasisCoin from "../../assets/images/coin.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import TransactionTable from "../../components/transactionTable/TransactionTable";

const Wallet = () => {
  const [creditLimit, setCreditLimit] = useState(500000);
  const [utilizedLimit, setUtilizedLimit] = useState(5000);
  const [coinBalance, setCoinBalance] = useState(200);
  const [totalSpend, setTotalSpend] = useState(0.0);
  const [seeLimit, setSeeLimit] = useState(false);
  return (
    <DashboardLayoutSecond>
      <div className="text-[#fcfcd8] bg-[#0d0e0e] w-full h-full px-4 py-3 rounded-tl-[38px] flex justify-between">
        <div className="basis-[28%] h-full flex flex-col  gap-y-4">
          {/** ---------- SECTION 1 --------------- */}
          <div className="bg-[#050505] h-fit rounded-[28px]  px-4 py-4">
            <h5>Your Wallet</h5>

            {/**-------------- CARD --------------- */}
            <div
              className="w-full bg-cover bg-center p-6 rounded-2xl h-48 flex flex-col justify-between mt-4"
              style={{ backgroundImage: `url(${dummyCard})` }}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg">Wallet Balance</p>
                <div>
                  <img src={logoImg} alt="logo" />
                </div>
              </div>
              <div>
                <p className="text-lg">Available Limit</p>
                <div className="flex items-center gap-x-4">
                  <div className="flex gap-x-1">
                    {seeLimit
                      ? creditLimit
                      : Array(4)
                          .fill(0)
                          .map(() => (
                            <div className="h-[18px] w-[18px] rounded-full bg-[#141414] opacity-35"></div>
                          ))}
                  </div>{" "}
                  <div
                    className="cursor-pointer"
                    onClick={() => setSeeLimit(!seeLimit)}
                  >
                    {seeLimit ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between">
                <span className="opacity-50 font-thin">
                  Utilized Coins Credit -
                </span>
                <div className="flex items-center gap-x-2">
                  <span className="font-thin">{utilizedLimit}</span>{" "}
                  <img width={12} src={cooasisCoin} alt="coin" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="opacity-50 font-thin">Coins on holds -</span>
                <div className="flex items-center gap-x-2">
                  <span className="font-thin">{coinBalance}</span>{" "}
                  <img width={12} src={cooasisCoin} alt="coin" />
                </div>
              </div>
            </div>
            <div className="font-thin opacity-50 text-sm flex items-center gap-x-1 ">
              <IoMdInformationCircleOutline size={18} />
              <span>One coin is worth INR 10</span>
            </div>
            <button
              className="w-full py-3 px-4 mt-4 text-center rounded-xl text-[#e1ff26] bg-[#0e0f06]"
              onClick={() => console.log("Invoice Requested")}
            >
              Request for invoice
            </button>
          </div>

          {/** -------- SECTION 2 --------- */}
          <div className="bg-[#050505] flex-1 flex flex-col gap-y-3 overflow-hidden rounded-[28px]  p-4 ">
            <div className="flex h-fit justify-between items-center">
              <p>Payment Method</p>
              <GoPlus size={20} className="text-[#e1ff26] cursor-pointer" />
            </div>
            <div className="flex-1 pr-2 overflow-y-auto scrollbar-sm custom-scrollbar">
              <div className="bg-[#0d0e0e] w-full p-4 rounded-2xl  mt-3">
                <h5 className="flex items-center gap-x-4">
                  Federal Bank{" "}
                  <img src={mastercard} width={20} alt="mastercard-logo" />
                </h5>
                <div className=" flex items-center gap-x-4">
                  <span className="p-1 py-0.5 text-[12px] bg-[#242424] text-[#90907e] rounded-[5px]">
                    Default
                  </span>
                  <span className="text-xs">**** 1234</span>
                </div>
              </div>
              <div className="bg-[#0d0e0e] w-full p-4 rounded-2xl  mt-3">
                <h5 className="flex items-center gap-x-4">
                  Federal Bank{" "}
                  <img src={mastercard} width={20} alt="mastercard-logo" />
                </h5>
                <div className=" flex items-center gap-x-4">
                  <span className="p-1 py-0.5 text-[12px] bg-[#242424] text-[#90907e] rounded-[5px]">
                    Default
                  </span>
                  <span className="text-xs">**** 1234</span>
                </div>
              </div>
              <div className="bg-[#0d0e0e] w-full p-4 rounded-2xl  mt-3">
                <h5 className="flex items-center gap-x-4">
                  Federal Bank{" "}
                  <img src={mastercard} width={20} alt="mastercard-logo" />
                </h5>
                <div className=" flex items-center gap-x-4">
                  <span className="p-1 py-0.5 text-[12px] bg-[#242424] text-[#90907e] rounded-[5px]">
                    Default
                  </span>
                  <span className="text-xs">**** 1234</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** -------------- SECTION 3 */}
        <div className="h-full basis-[70%] bg-[#050505] rounded-[28px] px-6 py-4">
          <div className="w-full flex justify-between items-center text-xl">
            <span>Payments</span>
            <p className="flex items-center px-4 py-3 bg-[#0e0e0e] rounded-2xl">
              Total Spend: <MdCurrencyRupee /> 0.00
            </p>
          </div>
          <div>
            <TransactionTable />
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
};

export default Wallet;
