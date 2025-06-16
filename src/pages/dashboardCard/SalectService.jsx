import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import ImageGalleryService from "./SalectServiceCard"; // Your service card component
import DashboardLayout from "../../components/dashboard/dashboardLayout/DashboardLayout"; // Ensure correct path for layout

function DashboardService() {
  const navigate = useNavigate(); // Initialize the navigate function

  const progress = 50; // Example progress value; replace with your logic
  const handleProceed = () => {
    console.log("Proceed button clicked"); // Debug log to ensure function is called
    navigate("/Choose-Once"); // Navigate to the next page on button click
  };

  return (
    <DashboardLayout>
      <div className="bg-[#111111] w-full h-full rounded-l-3xl ">
        {/* Top Section: Title and Buttons */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#FCFCD8] f-HelveticaNeueRoman">
            Select a service
          </h1>
          <div className="flex space-x-4 w-210px h-50px">
            <button className="py-2 px-4 text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Cancel
            </button>
            <button className="py-2 px-4 bg-[#161616] text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Save Draft
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="mt-2 text-[#FCFCD8] f-HelveticaNeueRoman mb-2">
          <input
            type="text"
            placeholder="Search for a service (e.g. brand design, UI/UX)"
            className="w-96 h-10 p-3 bg-[#000000] rounded-md"
          />
        </div>
        {/* Featured Section */}
        <div className="mb-4 w-full">
          <h2 className="text-[#FCFCD8] f-HelveticaNeueRoman mb-4">Featured</h2>
        </div>
        <ImageGalleryService /> {/* Display the service card component */}
        {/* Progress Bar Section */}
        <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-10 ml-5">
          <div className="flex items-center gap-3">
            <span className="f-HelveticaNeueRoman text-[#FCFCD8]">
              Project brief completion
            </span>
            <div className="w-[350px] h-1 bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full rounded-md"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #E1FF26 65%, #2D2D2D 100%)",
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
              onClick={handleProceed} // Attach the navigation on click
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

export default DashboardService;
