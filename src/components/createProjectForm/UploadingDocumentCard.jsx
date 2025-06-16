import React, { useEffect, useState } from "react";
import { BsClipboardMinus } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import tickIcon from "../../assets/images/tic-icon.svg";
import { IoMdClose } from "react-icons/io";

const UploadingDocumentCard = ({ file, handleRemoveFile }) => {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const totalTime = 3000;
    const intervalTime = 50;
    const totalSteps = totalTime / intervalTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / totalSteps) * 100, 100).toFixed(0));
      setSpeed((Math.random() * (200 - 50) + 50).toFixed(0));

      if (currentStep >= totalSteps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [file?.name]);

  const formatFileSize = (fileSizeInBytes) => {
    if (fileSizeInBytes < 1024) {
      return `${fileSizeInBytes} b`;
    } else if (fileSizeInBytes < 1024 * 1024) {
      const fileSizeInKB = fileSizeInBytes / 1024;
      return `${fileSizeInKB.toFixed(2)} kb`;
    } else {
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
      return `${fileSizeInMB.toFixed(2)} mb`;
    }
  };

  return (
    <div className="w-96  flex items-center gap-x-3">
      {file?.type === "application/pdf" && (
        <div className={`p-4 w-fit rounded-2xl bg-[#2b2020] text-[#f56565]`}>
          <BsClipboardMinus size={24} />
        </div>
      )}
      {(file?.type === "image/png" ||
        file?.type === "image/jpeg" ||
        file?.type === "image/jpg") && (
        <div className={`p-4 w-fit rounded-2xl bg-[#0c1711] text-[#48bb78]`}>
          <CiImageOn size={24} />
        </div>
      )}
      {file?.type === "docx" && (
        <div className={`p-4 w-fit rounded-2xl bg-[#0c141b] text-[#4299e1]`}>
          <FiFileText size={24} />
        </div>
      )}
      {file?.type === "xxl" && (
        <div className={`p-4 w-fit rounded-2xl bg-[#11081e] text-[#7d22ff]`}>
          <FaRegFileCode size={24} />
        </div>
      )}
      <div className="flex-1">
        <div className=" flex justify-between items-center">
          <div
            className={`text-sm basis-[90%] opacity-55 flex  ${
              progress < 100 ? "flex-row gap-x-4" : "flex-col gap-y-1"
            }`}
          >
            <span>
              {file?.name?.length > 23
                ? `${file?.name?.slice(0, 24)}...`
                : file?.name}
            </span>
            <span>{formatFileSize(file?.size)}</span>
          </div>
          {progress >= 100 && (
            <div
              className="h-[19px] w-[19px] flex justify-center cursor-pointer items-center rounded-full bg-[#00000033]"
              onClick={handleRemoveFile}
            >
              <IoMdClose size={12} className="text-[#e1ff26]" />
            </div>
          )}
        </div>
        {progress < 100 && (
          <div className="w-full h-1 my-1.5 relative bg-[#9D9D9D42] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-md transition-width duration-500 ease-in-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #E1FF26 0%, #2D2D2D 100%)",
                //   background: "#e1ff26",
              }}
            ></div>
          </div>
        )}
        {progress < 100 && (
          <div className="text-xs  opacity-55 flex justify-between">
            <span>{progress}% done</span>
            <span>{speed}KB/sec</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadingDocumentCard;
