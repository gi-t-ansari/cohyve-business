import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import DashboardLayout from '../../components/dashboard/dashboardLayout/DashboardLayout';
import AIIcon from "../../assets/images/WriteAIIcon.svg";

function ProjectBrief() {
  const [references, setReferences] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const progress = 30; // Progress percentage (you can adjust it dynamically)
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to add reference
  const ChooseFile = () => {
    if (inputValue) {
      setReferences([...references, inputValue]);
      setInputValue(''); // Clear input field after adding
    }
  };

  // Handle Proceed button click
  const handleProceed = () => {
    // Add any validation or final checks here if needed
    navigate('/choose-designer'); // Change '/next-page' to the actual path of the next page
  };

  return (
    <DashboardLayout>
      <form className="bg-[#111111] p-3 f-HelveticaNeueRoman text-[#FCFCD8]">
        <p className="f-HelveticaNeueRoman mb-6">Please proceed with the project brief.</p>

        {/* Name of Project */}
        <input
          id="project-name"
          type="text"
          className="w-[370px] h-[40px] mb-4 bg-[#000000B5] bg-opacity-70 rounded-lg f-HelveticaNeueRoman"
          placeholder="  Name of Project"
          required
        />

        {/* Description */}
        <label htmlFor="description" className="block f-HelveticaNeueRoman mb-2">Describe your design requirement in detail</label>

        {/* Buttons for Write with AI and Upload */}
        <div className="flex space-x-4 ">
          <button
            type="button"
            className="flex justify-center items-center w-[150px] h-[50px] px-4 py-2 bg-[#000000B5] bg-opacity-70 rounded-lg "
          >
            <img src={AIIcon} alt="" className="flex items-center" />
            Write with AI
          </button>
          <h3 className="flex items-center"> Or </h3>
          <label
            htmlFor="upload-file"
            className="flex items-center justify-center w-[180px] h-[50px] px-4 py-2 bg-[#000000B5] bg-opacity-70 rounded-lg"
          >
            Upload your file
            <input
              id="upload-file"
              type="file"
              accept=".doc, .pdf, .docx"
              className="hidden"
            />
          </label>
        </div>
        <p className="text-[#FCFCD880] bg-opacity-50 f-HelveticaNeueRoman ml-44">Accepted files: doc/pdf/docx</p>

        {/* Project Type */}
        <label htmlFor="project-type" className="block font-semibold mb-2">What kind of project is this?</label>
        <select
          id="project-type"
          className="w-[400px] px-4 py-2 mb-4 bg-[#000000B5] bg-opacity-70 rounded-lg"
        >
          <option value="One-time project">One-time project</option>
          <option value="Ongoing project">Ongoing project</option>
        </select>

        {/* Add References */}
        <label htmlFor="url" className="block font-semibold mb-2">Add References/web links</label>
        <div className="flex w-[400px] bg-[#000000B5] bg-opacity-70 rounded-lg">
          <button
            type="button"
            onClick={ChooseFile}
            className="w-full py-3 rounded-lg text-[#FCFCD8] f-HelveticaNeueRoman"
          >
            Add Reference
          </button>
          <input type="file" className="hidden" id="fileUpload" />
          <label
            htmlFor="fileUpload"
            className="w-32 h-10 py-2 bg-[#161616] rounded-lg text-[#E1FF26] mt-1 mr-1 text-center cursor-pointer f-HelveticaNeueRoman"
          >
            Choose file
          </label>
        </div>

        {/* Input URL & Press Enter */}
        <div className="flex flex-col mt-3 w-[400px] h-[44px] bg-[#000000B5] bg-opacity-70 rounded-lg">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission
                ChooseFile();
              }
            }}
            placeholder="Input URL & press Enter"
            className="w-full py-3 rounded-lg text-[#FCFCD8] bg-[#000000B5] bg-opacity-70 px-4"
          />
        </div>

        {/* Display Added References */}
        <ul id="reference-list" className="list-none mb-4">
          {references.map((reference, index) => (
            <li key={index} className="mb-2">
              <a href={reference} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {reference}
              </a>
            </li>
          ))}
        </ul>

        {/* Deadline */}
        <label htmlFor="deadline" className="block font-semibold mb-2">Add a project deadline</label>
        <input
          id="deadline"
          type="date"
          className="w-[400px] px-4 py-1 bg-[#000000B5] bg-opacity-70 rounded-lg"
          required
        />
      </form>

      {/* Progress Bar Section */}
      <div className="flex items-center justify-between bg-[#000000] p-3 rounded-[1rem] w-[1100px] mt-5 ml-5">
        {/* Left side: Project brief text */}
        <div className="flex items-center gap-3">
          <span className="f-HelveticaNeueRoman text-[#FCFCD8]">
            Project brief completion
          </span>
          {/* Progress bar container */}
          <div className="w-[350px] h-1 bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
            {/* Progress bar */}
            <div
              className="absolute top-0 left-0 h-full rounded-md"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #E1FF26 65%, #2D2D2D 100%)",
              }}
            />
          </div>
        </div>

        {/* Right side: Buttons */}
        <div className="flex space-x-4">
          <button className="f-HelveticaNeueRoman bg-[#161616] text-[#FCFCD8] px-4 py-2 rounded">
            Save Draft
          </button>
          <button 
            onClick={handleProceed} // Add onClick handler
            className="f-HelveticaNeueRoman bg-[#161616] text-[#E1FF26] px-4 py-2 rounded"
          >
            Proceed
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProjectBrief;
