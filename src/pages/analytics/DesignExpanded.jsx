import React from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import { MdVerified, MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import designDummyImg from "../../assets/images/desiggn-dummy-img.svg";
import CommentsCard from "../../components/cards/CommentsCard";
import { useNavigate } from "react-router-dom";

const DesignExpanded = () => {
  const navigate = useNavigate();

  const handleCloseDesign = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <DashboardLayoutSecond>
      <div className="w-full h-full p-4 pr-[2rem] flex justify-between">
        <section className=" h-full flex flex-col  basis-[70%] overflow-hidden">
          <div className="bg-[#050505] flex-1 flex flex-col rounded-[28px] p-4 overflow-hidden">
            <header className="w-full h-fit flex justify-between items-center mb-3">
              <div className="flex items-center gap-x-3">
                <div className="flex gap-x-1 items-center text-[#e1ff26] bg-[#141414BF] py-1.5 px-3 rounded-[14px]">
                  <MdVerified />
                  <span>2</span>
                </div>
                <p className="opacity-55 font-thin">Illustration draft2.png</p>
                <div
                  className=" h-5 w-5 flex justify-center items-center border-[2px]  rounded-md cursor-pointer transition-all duration-300 ease-linear"
                  //   onClick={() => handleDownload(fileId)}
                >
                  <MdOutlineFileDownload size={20} />
                </div>
              </div>
              <IoMdClose
                size={20}
                className=" cursor-pointer"
                onClick={handleCloseDesign}
              />
            </header>
            <div className="flex-1 w-full rounded-[14px] overflow-hidden">
              <img
                className="w-full object-cover h-full"
                src={designDummyImg}
                alt="design-img"
              />
            </div>
          </div>

          <footer className="w-full h-fit p-3 mt-4 flex justify-end items-center gap-x-3">
            <FaArrowLeft size={18} className="opacity-50" />
            <FaArrowRight size={18} />
          </footer>
        </section>
        <section className="bg-[#050505] h-full rounded-[28px] basis-[29%]">
          <CommentsCard />
        </section>
      </div>
    </DashboardLayoutSecond>
  );
};

export default DesignExpanded;
