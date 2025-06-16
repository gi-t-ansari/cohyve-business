import React from "react";
import ModalLayout from "./ModalLayout";

const CloseFormModal = ({
  open,
  onClose,
  handleSaveDraft,
  setActiveStep,
  reset,
  setAllValues,
}) => {
  const handleCancelProject = () => {
    reset();
    setAllValues(null);
    setActiveStep(0);
    onClose();
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <div className="p-2 px-3">
        <h2 className="text-center text-[#FF8E8E] text-2xl">Important</h2>
        <p className="  text-center font-thin my-6">
          Are you sure you want to cancel the project
        </p>
        <div className="flex justify-between ">
          <button
            className="basis-[45%] text-[15px] bg-[#161616] text-[#FCFCD8] py-2 rounded-lg"
            onClick={handleSaveDraft}
          >
            Save Draft
          </button>
          <button
            className="basis-[45%] text-[15px] py-2 bg-[#F565651A] text-[#F56565] rounded-lg"
            onClick={handleCancelProject}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default CloseFormModal;
