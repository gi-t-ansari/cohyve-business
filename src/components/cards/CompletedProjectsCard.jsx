import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { GoShieldCheck } from "react-icons/go";
import fileIcon from "../../assets/images/file-icon-blue.svg";
import tickIcon from "../../assets/images/tick-icon-blue.svg";

const CompletedProjectsCard = ({ projects }) => {
  const [downloadingFileId, setDownloadingFileId] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (id) => {
    setDownloadingFileId(id);
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 2000);
  };

  useEffect(() => {
    if (isDownloaded) {
      const timer = setTimeout(() => {
        setIsDownloaded(false);
        setDownloadingFileId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isDownloaded]);

  return (
    // <div className="w-full h-[26%]  p-4 bg-[#050505] rounded-3xl overflow-hidden">
    //   <header className="flex h-[15%] justify-between  items-center">
    //     <h5 className="text-lg">Completed Projects</h5>
    //     <HiDotsVertical size={14} className="opacity-55 cursor-pointer" />
    //   </header>
    //   {projects ? (
    //     <>
    //       <div className="w-full border opacity-55 mt-2"></div>
    //       <div className="w-full h-[70%] overflow-y-auto mt-2 pr-2 custom-scrollbar scrollbar-sm">
    //         {[1, 2, 3, 4].map((ele, ind) => (
    //           <div className="flex items-center justify-between py-3  border-b border-[#292929] text-sm">
    //             <p>Marketing Campaign.zip</p>
    //             <a href="#">download</a>
    //           </div>
    //         ))}
    //       </div>
    //     </>
    //   ) : (
    //     <div className="flex flex-col justify-center items-center h-full ">
    //       <div className="p-3 rounded-full border border-[#141414] ">
    //         <div className="p-2 rounded-full border border-[#141414]">
    //           <GoShieldCheck className="text-[#e1ff26]" size={24} />
    //         </div>
    //       </div>

    //       <p className="text-sm opacity-55 font-thin text-wrap ">
    //         No completed projects ! Start creating a project.
    //       </p>
    //     </div>
    //   )}
    // </div>
    <div className="flex-1 p-4 bg-[#050505] rounded-3xl overflow-hidden">
      <header className="flex justify-between items-center">
        <h5 className="text-lg">Completed Projects</h5>
        <HiDotsVertical size={14} className="opacity-55 cursor-pointer" />
      </header>
      {projects ? (
        <>
          <div className="w-full border opacity-55 my-2"></div>
          <div className="w-full h-[70%] overflow-y-auto pr-2 custom-scrollbar scrollbar-sm">
            {[1, 2, 3, 4].map((ele, ind) => (
              <div
                key={ind}
                className="flex items-center justify-between py-3 border-b border-[#292929] text-sm"
              >
                <div className="flex items-center gap-x-2">
                  <img height={14} width={14} src={fileIcon} alt="" />
                  <p>Marketing Campaign.zip</p>
                </div>
                <div className=" w-[61px] flex justify-center">
                  {downloadingFileId !== ele && (
                    <p
                      className="cursor-pointer transition-all duration-300 ease-linear"
                      onClick={() => handleDownload(ele)}
                    >
                      download
                    </p>
                  )}
                  {downloadingFileId === ele &&
                    isDownloading &&
                    !isDownloaded && (
                      <div className="h-3.5 w-3.5 transition-all duration-300 ease-linear">
                        <div className="h-full w-full animate-spin rounded-full border-y-2 border-[#7D22FF] transition-all duration-300 ease-linear"></div>
                      </div>
                    )}
                  {downloadingFileId === ele &&
                    isDownloaded &&
                    !isDownloading && (
                      <div className="bg-[#141414] w-fit px-2 py-1 rounded-lg transition-all duration-300 ease-linear">
                        <img src={tickIcon} alt="" />
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="p-3 rounded-full border border-[#141414]">
            <div className="p-2 rounded-full border border-[#141414]">
              <GoShieldCheck className="text-[#e1ff26]" size={24} />
            </div>
          </div>
          <p className="text-sm opacity-55 font-thin text-wrap">
            No completed projects! Start creating a project.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompletedProjectsCard;
