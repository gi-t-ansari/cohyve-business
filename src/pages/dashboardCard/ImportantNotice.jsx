import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import DashboardLayout from "../../components/dashboard/dashboardLayout/DashboardLayout";

const ImportantModal = () => {
  const [isOpen, setIsOpen] = useState(true); // State to handle modal visibility

  const navigate = useNavigate(); // Initialize navigate

  // Close modal and navigate to next page
  const closeModal = () => {
    console.log("Modal closed, navigating to next page..."); // Log the action
    setIsOpen(false);
    
    // Navigate to the next page
    navigate("/find-best-talent"); // Replace with your actual next page route
  };

  return (
    <DashboardLayout>
      {/* Render the main dashboard layout content */}
      <>
        {isOpen && (
          <div className="fixed inset-0 ml-24 mt-16 flex justify-center items-center bg-[#000000B8] bg-opacity-75 ">
            <div className="f-HelveticaNeueRoman bg-[#0D0E0E] text-[#FFF5D9] w-[390px] h-[415px] rounded-lg p-8 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-[#000000] f-HelveticaNeueRoman "
              >
                ✖
              </button>

              {/* Modal Header */}
              <h2 className="text-center text-[#FF8E8E] f-HelveticaNeueRoman mb-4">
                Important
              </h2>
              <p className="text-center text-[#FFF5D985] mb-6 f-HelveticaNeueRoman ">
                Go through the details before proceeding
              </p>

              {/* Modal Content */}
              <div className="flex flex-col gap-4 mb-2">
                <div className="flex items-start">
                  <input
                    type="radio"
                    name="agreement"
                    id="agree"
                    className="mr-2 mt-1"
                  />
                  <label
                    htmlFor="agree"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] "
                  >
                    By submitting, you agree with our{" "}
                    <span className="text-[#43DCAE] underline cursor-pointer f-HelveticaNeueRoman">
                      Terms of Service, Privacy Policy
                    </span>
                    , and our default Notification Settings.
                  </label>
                </div>
                <p className="f-HelveticaNeueRoman text-[#FFF5D9] mt-2 ml-5">
                  <span>The creator might take 1-6 hours toggle NotificationBox</span>
                  <span> get back to you with their set of questions</span>
                  <span>(if any).</span>
                </p>
              </div>

              {/* Proceed Button */}
              <div className="flex justify-center mt-14">
                <button
                  onClick={closeModal}
                  className="bg-[#161616] f-HelveticaNeueRoman w-[350px] h-[45px] px-6 py-2 rounded-md"
                >
                  <span className="flex justify-center text-[#E1FF26] f-HelveticaNeueRoman">
                    Proceed
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </DashboardLayout>
  );
};

export default ImportantModal;
