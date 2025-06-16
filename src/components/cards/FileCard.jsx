import React, { useEffect, useState } from "react";
import { BsClipboardMinus } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { FaRegFileCode } from "react-icons/fa6";
import tickIcon from "../../assets/images/tic-icon.svg";

const FileCard = ({ fileType, fileName, fileSize, fileId }) => {
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
    <div className="w-full flex items-center py-3 justify-between">
      <div className="flex items-center gap-x-3">
        {fileType === "pdf" && (
          <div className={`p-4  rounded-2xl bg-[#2b2020] text-[#f56565]`}>
            <BsClipboardMinus size={24} />
          </div>
        )}
        {(fileType === "png" || fileType === "jpg" || fileType === "peng") && (
          <div className={`p-4  rounded-2xl bg-[#0c1711] text-[#48bb78]`}>
            <CiImageOn size={24} />
          </div>
        )}
        {fileType === "docx" && (
          <div className={`p-4  rounded-2xl bg-[#0c141b] text-[#4299e1]`}>
            <FiFileText size={24} />
          </div>
        )}
        {fileType === "xxl" && (
          <div className={`p-4  rounded-2xl bg-[#11081e] text-[#7d22ff]`}>
            <FaRegFileCode size={24} />
          </div>
        )}
        <div>
          <h6 className="text-sm">{`${fileName}.${fileType}`}</h6>
          <p className="text-xs opacity-55 flex items-center gap-x-6 mt-1">
            <span className="uppercase">{fileType}</span>
            <span>{fileSize}</span>
          </p>
        </div>
      </div>
      {downloadingFileId !== fileId && (
        <div
          className=" h-5 w-5 flex justify-center items-center border-[2px] opacity-55 rounded-md cursor-pointer transition-all duration-300 ease-linear"
          onClick={() => handleDownload(fileId)}
        >
          <MdOutlineFileDownload size={20} />
        </div>
      )}
      {downloadingFileId === fileId && isDownloading && !isDownloaded && (
        <div className="h-5 w-5 transition-all duration-300 ease-linear">
          <div className="h-full w-full animate-spin rounded-full border-y-2 border-[#fcfcd8] opacity-55 transition-all duration-300 ease-linear"></div>
        </div>
      )}
      {downloadingFileId === fileId && isDownloaded && !isDownloading && (
        <div className="bg-[#171717] w-5 h-5 rounded-md flex justify-center items-center  transition-all duration-300 ease-linear">
          <img width={10} src={tickIcon} alt="" className="opacity-40" />
        </div>
      )}
    </div>
  );
};

export default FileCard;
