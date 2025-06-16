import React from "react";
import { IoMdClose } from "react-icons/io";

const ModalLayout = ({ children, open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } 
        transition-opacity duration-300 ease-linear`}
    >
      <div
        className="absolute inset-0 backdrop-blur-custom bg-black/50"
        onClick={onClose}
      ></div>
      <div
        className={`relative min-w-[381px] max-w-[540px] min-h-fit max-h-[400px]  bg-[#0d0e0e] 
          border-[0.5px] rounded-[30px] border-[#FFFFFF21] 
          transform transition-transform duration-300 ease-linear 
          ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <div
          className="h-8 w-8 absolute right-3 top-3 bg-[#000000] flex justify-center items-center 
            cursor-pointer rounded-full"
          onClick={onClose}
        >
          <IoMdClose size={20} className="text-[#4e4e4e]" />
        </div>
        <div className="w-full h-full p-5 text-[#fcfcd8]">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
