import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { useNavigate } from "react-router-dom";

const LogoutConfirmationModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/signin");
      onClose();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <div className="p-2 px-3">
        <h2 className="text-center text-[#FF8E8E] text-2xl">Important</h2>
        <p className="  text-center font-thin my-6">
          Are you sure ? You want to Signout!
        </p>
        <div className="flex flex-row-reverse justify-between ">
          <button
            className={`basis-[45%] text-[15px] bg-[#161616] text-[#FCFCD8] py-2 rounded-lg ${
              isLoading && "cursor-not-allowed"
            }`}
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            className={`basis-[45%] text-[15px] py-2 bg-[#F565651A] text-[#F56565] rounded-lg flex justify-center items-center transition-all duration-300 ease-linear ${
              isLoading && "cursor-not-allowed"
            }`}
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 transition-all duration-300 ease-linear">
                <div className="h-full w-full animate-spin rounded-full border-y-2 border-[#F56565] opacity-55 transition-all duration-300 ease-linear"></div>
              </div>
            ) : (
              "Signout"
            )}
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default LogoutConfirmationModal;
