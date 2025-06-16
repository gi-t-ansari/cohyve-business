import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";

// Sample icons for the Fixed and Retainer options
import ChooseOnceIconFrist from "../../assets/images/ChooseOnceIconFrist.svg";
import ChooseOneIconSecod from "../../assets/images/ChooseOnceIconSecond.svg";

function ChooseOnce() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the next page
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected:", option); // Log the selected option to the console
    
    setTimeout(() => {
      // Simulate delay for transition before navigation
      // navigate("/style-reference"); // Replace '/next-page' with your actual next page route
    }, 500); // Adjust delay if necessary
  };
  const progress = 50;
  const handleProceed = () => {
    navigate("/style-reference");
  };

  return (
    <DashboardLayoutSecond>
      <div className="flex flex-col h-full p-5 bg-[#111111]">
        <h2 className="text-[#FCFCD8] f-HelveticaNeueRoman mb-8">Choose one</h2>

        <div className="flex space-x-6">
          {/* Fixed Option */}
          <div
            onClick={() => handleSelect("Fixed")}
            className={`flex flex-col items-center p-6 rounded-lg cursor-pointer bg-[#191919] w-[250px] h-[200px] relative 
              ${selectedOption === "Fixed" ? "border-2 border-[#E1FF26]" : "border-2 border-transparent"}`}
          >
            <img src={ChooseOnceIconFrist} alt="Fixed Icon" className="w-12 h-12 mb-4" />
            <h3 className="text-[#FCFCD8] f-HelveticaNeueRoman text-xl">Fixed</h3>
            <p className="text-[#777777] text-center mt-2">
              Hire an expert for a defined project scope, deliverable, or milestone.
            </p>
            {selectedOption === "Fixed" && (
              <span className="absolute top-3 left-3 text-[#E1FF26]">✔</span>
            )}
          </div>

          {/* Retainer Option */}
          <div
            onClick={() => handleSelect("Retainer")}
            className={`flex flex-col items-center p-6 rounded-lg cursor-pointer bg-[#191919] w-[250px] h-[200px] relative 
              ${selectedOption === "Retainer" ? "border-2 border-[#E1FF26]" : "border-2 border-transparent"}`}
          >
            <img src={ChooseOneIconSecod} alt="Retainer Icon" className="w-12 h-12 mb-4" />
            <h3 className="text-[#FCFCD8] f-HelveticaNeueRoman text-xl">Retainer</h3>
            <p className="text-[#777777] text-center mt-2">
              Hire an expert for ongoing or continuous support.
            </p>
            {selectedOption === "Retainer" && (
              <span className="absolute top-3 left-3 text-[#E1FF26]">✔</span>
            )}
          </div>
        </div>
        
        {/* Progress Bar Section */}
        <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-60 ml-20">
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

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="f-HelveticaNeueRoman bg-[#161616] text-[#FCFCD8] px-4 py-2 rounded">
              Save Draft
            </button>
            <button 
              onClick={handleProceed} // Navigate on click
              className="f-HelveticaNeueRoman bg-[#161616] text-[#E1FF26] px-4 py-2 rounded"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
}

export default ChooseOnce;
