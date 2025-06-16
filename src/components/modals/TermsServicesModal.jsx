import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import tickIcon from "../../assets/images/tic-icon.svg";

const TermsServicesModal = ({ open, onClose, handleFinalSubmit }) => {
  const [userAgreed, setUserAgreed] = useState(null);

  const handleAgreement = (e) => {
    setUserAgreed(e?.target?.checked);
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <div className="p-2 px-3">
        <h2 className="text-center text-[#FF8E8E] text-2xl">Important</h2>
        <p className="text-xs opacity-55 text-center font-thin mt-4 mb-3">
          Go through the details before proceeding
        </p>
        <div className="h-[0.5px] bg-[#fcfcd8] opacity-55 my-7"></div>
        <label className="relative">
          <input type="checkbox" hidden onChange={handleAgreement} />
          <div className="flex gap-x-4 justify-center">
            <div
              className={`w-[19px] h-[19px] absolute left-0 cursor-pointer ${
                !userAgreed && "border-2 rounded-full  border-[#282525]"
              } `}
            >
              {userAgreed && (
                <div className="h-full w-full flex justify-center items-center rounded-full bg-[#3d3d3d]">
                  <img src={tickIcon} alt="tick" />
                </div>
              )}
            </div>
            <p className="text-sm">
              By submitting you agree with our <br /> Terms of Service, Privacy
              Policy, and <br /> our default Notification Settings.
            </p>
          </div>
        </label>
        <div className="h-[0.5px] bg-[#fcfcd8] opacity-55 my-7"></div>
        <div className="flex  justify-center">
          <p className="text-sm">
            By submitting you agree with our <br /> Terms of Service, Privacy
            Policy, and <br /> our default Notification Settings.
          </p>
        </div>
      </div>
      <button
        className={`w-full text-[15px] py-3 mt-6 rounded-[15px] bg-[#161616] text-[#e1ff26] ${
          !userAgreed && "cursor-not-allowed"
        }`}
        disabled={!userAgreed}
        onClick={handleFinalSubmit}
      >
        Submit
      </button>
    </ModalLayout>
  );
};

export default TermsServicesModal;
