import React from 'react';
import DashboardLayout from '../../components/dashboard/dashboardLayout/DashboardLayout';
import ProgressBar from '../../components/dashboard/progressBar/ProgressBar';

// Data for the project options
const projectOptions = [
  {
    id: 1,
    name: 'Fixed',
    description: 'Hire an expert for a defined project scope, deliverable, or milestone',
    icon: '₹',
  },
  {
    id: 2,
    name: 'Retainer',
    description: 'Hire an expert for a defined project scope, deliverable, or milestone',
    icon: '₹',
  },
];

function SalectProject() {
  return (
    <DashboardLayout>
      <div className="bg-[#111111] w-full h-full">
        {/* Top Section: Title and Buttons */}
        <div className="flex justify-between items-center mb-6 mt-5">
          {/* Title */}
          <h1 className="text-[#FCFCD8] f-HelveticaNeueRoman ml-5">
            Choose One
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

        {/* Static Options with map function */}
        <div className="flex space-x-4 ml-6">
          {projectOptions.map((option) => (
            <div
              key={option.id}
              className="w-[300px] h-[228px] rounded-md flex flex-col border p-4 bg-[#191919]" // Same background color for all cards
            >
              <div className="flex flex-col f-HelveticaNeueRoman">
                <div className="text-[#E1FF26] mb-4  f-HelveticaNeueRoman">{option.icon}</div>
                <div className="text-[#FCFCD8] f-HelveticaNeueRoman mt-14 ml-4 ">{option.name}</div>
                <p className="text-[#888888]  mt-2 f-HelveticaNeueRoman ml-4">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-56">
          <ProgressBar />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SalectProject;
