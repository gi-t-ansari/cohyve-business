import React from "react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "./StyleReferenceCard"; // Ensure this path is correct

import DashboardLayout from "../../components/dashboard/dashboardLayout/DashboardLayout";

function DashboardService() {
  // const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const progress = 50;
  const handleProceed = () => {
    navigate("/illustration-prepared");
  };

  return (
    <DashboardLayout>
      <div className="w-full h-full p-6 bg-[#1A1A1A]">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h1 className="mb-4 text-[#FCFCD8] f-HelveticaNeueRoman">
            Which of the following style references do you prefer?
          </h1>
          {/* Buttons aligned right */}
          <div className="flex space-x-4 w-210px h-50px">
            <button className="py-2 px-4 text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Cancel
            </button>
            <button className="py-2 px-4 bg-[#161616] text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Save Draft
            </button>
          </div>
        </div>

        {/* Style Reference Grid */}
        <div className="">
          <ImageGallery />
        </div>

        {/* Additional Options */}
        <div className="mt-8">
          <h2 className="mb-4 text-[#FCFCD8] f-HelveticaNeueRoman">
            Not able to find what you're looking for? Try these options:
          </h2>
          {/* Other section with radio button */}
          <div className="flex flex-row">
            <div className="flex items-center w-60 py-2 bg-[#000000B5] bg-opacity-70 rounded-lg f-HelveticaNeueRoman">
              <label
                htmlFor="otherOption"
                className="cursor-pointer ml-5 text-[#FCFCD8]"
              >
                Other
              </label>
              <input
                type="radio"
                id="otherOption"
                name="styleOption"
                className="form-radio ml-36"
              />
            </div>

            {/* Upload style and file chooser */}
            <div className="flex gap-2 ml-5 w-[460px] bg-[#000000B5] bg-opacity-70 rounded-lg">
              <button className="w-full py-3 rounded-lg text-[#FCFCD8] f-HelveticaNeueRoman">
                Upload your style
              </button>
              <input type="file" className="hidden" id="fileUpload" />
              <label
                htmlFor="fileUpload"
                className="w-32 h-10 py-2 bg-[#161616] rounded-lg text-[#FCFCD8] mt-1 mr-1 text-center cursor-pointer f-HelveticaNeueRoman"
              >
                Choose file
              </label>
            </div>
          </div>
        </div>
        {/* Progress Bar Section */}
        <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-5 ml-7">
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
              onClick={handleProceed} // Navigate on click
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
