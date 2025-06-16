import React from 'react'
import { useNavigate } from "react-router-dom";
import DashboardLayout from '../../components/dashboard/dashboardLayout/DashboardLayout';
import ImageGalleryIllustration from './IllustrationPreparedCard';

function IllustrationProject() {
  const navigate = useNavigate();

  const progress = 50;
  const handleProceed = () => {
    navigate("/project-brief");
    
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mt-5 mb-2 ml-8">
          <h1 className="mb-2 text-[#FCFCD8] f-HelveticaNeueRoman">
            For which of the following do you want your illustration prepared?
          </h1>

          {/* Buttons aligned right */}
          <div className="flex space-x-4">
            <button className="py-2 px-4 text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Cancel
            </button>
            <button className="py-2 px-4 bg-[#161616] text-[#FCFCD8] transition-colors f-HelveticaNeueRoman">
              Save Draft
            </button>
          </div>
        </div>
      {/* Image section */}
      <div className="w-[1100px] h-[170px] ml-8" >
       <ImageGalleryIllustration />
      </div>
       {/* Additional Options */}
       <div className="mt-52">
          <h2 className="mb-4 text-[#FCFCD8] f-HelveticaNeueRoman">
            Not able to find what you're looking for? Try these options:
          </h2>
          <div className="flex gap-4 flex-wrap">
            {/* Other section with radio button */}
            <div className="flex items-center  bg-[#111111] rounded-lg  w-[170px] f-HelveticaNeueRoman">
              <label htmlFor="otherOption" className="cursor-pointer ml-5 text-[#FCFCD8]">
                Other
              </label>
              <input
                type="radio"
                id="otherOption"
                name="styleOption"
                className="form-radio ml-auto mr-5"
              />
            </div>

            {/* Upload style and file chooser */}
            <div className="flex gap-2  w-[500px] bg-[#111111] rounded-lg">
              <button className="w-full py-3 rounded-lg text-[#FCFCD8] f-HelveticaNeueRoman">
                Upload your style
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress Bar Section */}
        <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-5 ml-5">
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
              onClick={handleProceed} // Attach the navigation on click
              className="f-HelveticaNeueRoman bg-[#161616] text-[#E1FF26] px-4 py-2 rounded"
            >
              Proceed
            </button>
          </div>
        </div>
    </DashboardLayout>
  );
}

export default IllustrationProject;
