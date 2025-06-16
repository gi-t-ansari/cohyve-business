import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DashboardLayout from "../../components/dashboard/dashboardLayout/DashboardLayout";
import ProgressBar from "../../components/dashboard/progressBar/ProgressBar";

function ChooseDesigner() {
  // Designer levels array for mapping (excluding 'Pro Creator')
  const designerLevels = [
    { level: "Fresher", description: "5+ Projects experience" },
    { level: "Beginner", description: "20+ Projects experience" },
    { level: "Experienced", description: "40+ Projects experience" },
  ];

  // Pro Creator handled separately
  const proCreator = { level: "Pro", description: "100+ Projects experience" };

  // State for tracking selected radio button
  const [selectedLevel, setSelectedLevel] = useState("");

  // State for tracking progress
  const [progress, setProgress] = useState(70); // Example initial progress value

  // Use navigate hook
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle radio button change
  const handleChange = (level) => {
    setSelectedLevel(level);
  };

  // Handle Proceed button click
  const handleProceed = () => {
    console.log("Proceeding to the next page...");
    console.log("Selected Designer Level:", selectedLevel);
    console.log("Progress:", progress);

    // Navigate to the next page
    navigate("/choose-level-design"); // Replace '/next-page' with the actual route for the next page
  };

  return (
    <DashboardLayout>
      <div className="w-full h-full p-6 bg-[#1A1A1A]">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h1 className="mb-4 text-[#FCFCD8] f-HelveticaNeueRoman">
            Please choose what is the level of designer you want to work with?
          </h1>

          {/* Cancel and Save Draft buttons */}
          <div className="flex space-x-4">
            <button className="py-2 px-4 text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Cancel
            </button>
            <button className="py-2 px-4 bg-[#161616] text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Save Draft
            </button>
          </div>
        </div>

        {/* Designer Level Selection using map */}
        <div className="mt-6">
          <h2 className="text-[#FCFCD8] f-HelveticaNeueRoman">
            Choose designer level
          </h2>

          {/* Flexbox for designer levels */}
          <div className="grid grid-cols-2 gap-4 w-[900px] rounded-lg">
            {designerLevels.map(({ level, description }) => (
              <label
                key={level}
                className={`border text-[#FCFCD8] border-[#FCFCD8] rounded-lg w-full h-[59px] flex items-center justify-center bg-[#000000] bg-opacity-70 cursor-pointer`}
              >
                <div className="f-HelveticaNeueRoman">
                  {level} ({description})
                </div>
                <input
                  type="radio"
                  name="designerLevel"
                  value={level}
                  checked={selectedLevel === level}
                  onChange={() => handleChange(level)}
                  className="ml-14"
                />
              </label>
            ))}

            {/* Pro Creator called separately */}
            <label
              className={`border text-[#FCFCD8] border-[#FCFCD8] rounded-lg w-full h-[59px] flex items-center justify-center bg-[#000000] cursor-pointer`}
            >
              <div className="f-HelveticaNeueRoman">
                <span className="text-[#8327FA]">{proCreator.level} </span>
                <span className="text-[#FCFCD8]">
                  Creator ({proCreator.description})
                </span>
              </div>
              <input
                type="radio"
                name="designerLevel"
                value={proCreator.level}
                checked={selectedLevel === proCreator.level}
                onChange={() => handleChange(proCreator.level)}
                className="ml-14"
              />
            </label>
          </div>
        </div>

        {/* Budget Section */}
        <div className="mt-4">
          <h2 className="text-[#FCFCD8] mb-2 f-HelveticaNeueRoman mt-7">
            Please select a budget
          </h2>
          <p className="text-[#999] mb-4">
            Note: an ideal budget for a fresher creator would be ₹ 6,000
          </p>

          {/* Budget Display */}
          <div className="bg-[#161616] p-7 rounded-lg w-[400px] h-[80px]">
            <span className="text-[#FCFCD8] f-HelveticaNeueRoman ">₹ 10,000</span>
            <span className="ml-40 text-[#E1FF26] f-HelveticaNeueRoman">
              Looks
              <span className="ml-2 text-[#75FC6A] f-HelveticaNeueRoman">
                GOOD!
              </span>
            </span>
          </div>

          {/* Wallet Option */}
          <div className="mt-4 flex items-center">
            <input type="radio" id="walletOption" className="mr-2 mt-0" />
            <label htmlFor="walletOption" className="text-[#FCFCD8] mt-5 f-HelveticaNeueRoman ">
              Use coins from wallet and kick off the <br /> project instantly.
            </label>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-5 ml-5">
          {/* Left side: Project brief text */}
          <div className="flex items-center gap-3">
            <span className="f-HelveticaNeueRoman text-[#FCFCD8]">
              Project brief completion
            </span>
            <div className="w-[350px] h-1 bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full rounded-md"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #E1FF26 65%, #2D2D2D 100%)",
                }}
              />
            </div>
          </div>

          {/* Right side: Proceed Button */}
          <div className="flex space-x-4">
            <button
              onClick={handleProceed}
              className="f-HelveticaNeueRoman bg-[#161616] text-[#E1FF26] px-4 py-2 rounded"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ChooseDesigner;
