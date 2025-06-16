import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";

// images imported
import CreateProjectIconFrist from "../../assets/images/CreateProjectIconFrist.svg";
import ZeroIcon from "../../assets/images/ZeroIConFrist.svg";
import MyDraft from "../../assets/images/MyDraft.png";
import MyPendingIcon from "../../assets/images/Pending.svg";
import GetThreeMonths from "../../assets/images/Get3months.svg";
import CreateProjectSecond from "../../assets/images/CreateProjectSecond.svg";
import CreateProjectIcon from "../../assets/images/CreateProjectIcon.svg";
import CompletedIcon from "../../assets/images/CompletedIcon.svg";
import CompletdIonSecond from "../../assets/images/CompletedIconSecond.svg";
import UpcomingMeetingIcon from "../../assets/images/UpcomingMettingIcon.svg";
import ShortIconFrist from "../../assets/images/ShortIcon.svg";
import ShortIconSecond from "../../assets/images/ShortIconSecond.svg";

function CreateProject() {
  const navigate = useNavigate(); // Initialize useNavigate for page navigation

  // Function to handle create project button click
  const handleCreateProjectClick = () => {
    // Navigate to the next page on button click
    navigate("/salect-service");
  };

  return (
    <DashboardLayoutSecond>
      <div className="flex flex-wrap gap-3 p-6 bg-[#2D303133] bg-opacity-20 w-full h-full">
        {/* First Row */}
        {/* Create a Project Card */}
        <div className="flex justify-center items-center w-[290px] h-[190px] bg-[#050505]">
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src={CreateProjectIconFrist}
                alt="Icon"
                className="w-5 h-5 cursor-pointer"
                onClick={handleCreateProjectClick} // Navigate to next page on icon click
              />
            </div>
            <span className="text-[#FCFCD8] f-HelveticaNeueRoman block mt-2">
              Create a project
            </span>
          </div>
        </div>

        {/* My Drafts Section */}
        <div className="bg-[#050505] p-4 w-[290px] h-[190px]">
          <div className="f-HelveticaNeueRoman text-[#FCFCD8] flex flex-row">
            My Drafts <img src={ZeroIcon} alt="Zero Icon" className="ml-3" />
          </div>

          <div className="flex justify-center items-center mt-10">
            <img src={MyDraft} alt="Draft Icon" className="w-4 h-4" />
          </div>
          <p className="text-[#2F2F2F] text-center mt-2">
            No Drafts, Start creating a project
          </p>
        </div>

        {/* Pending Approvals */}
        <div className=" bg-[#050505] p-4 w-[290px] h-[190px]">
          <div className="text-[#FCFCD8] f-HelveticaNeueRoman flex flex-row">
            Pending Approvals <img src={ZeroIcon} alt="Zero Icon" className="ml-3" />
          </div>

          <div className="flex justify-center items-center mt-8 ">
            <img src={MyPendingIcon} alt="My pending Icon" className="w-6 h-6" />
          </div>
          <p className="text-[#2F2F2F] text-center mt-4">
            Hurray! No pending approvals
          </p>
        </div>

        {/* Premium Promo */}
        <div className="card bg-[#050505] p-4 flex flex-col w-[290px] h-[190px]">
          <p className="f-HelveticaNeueRoman text-[#FCFCD8] text-2xl">
            Get <span className="text-[#FF8E8E]">Premium</span>
            <span> Manage more than 100 projects</span>
          </p>
          <div className="">
            <img src={GetThreeMonths} alt="Get 3 months" className="w-36 h-40" />
          </div>
        </div>

        {/* Your Projects */}
        <div className="flex w-full">
          <p className="text-[#FCFCD8] f-HelveticaNeueRoman">Your Projects</p>
          <div className="flex flex-row ml-[660px]">
            <p className="text-[#FCFCD8] f-HelveticaNeueRoman">Sort By</p>
            <img
              src={ShortIconFrist}
              alt="Short Icon"
              className="w-5 h-5 ml-5"
            />
            <img
              src={ShortIconSecond}
              alt="Short Icon Second"
              className="w-5 h-5 ml-5"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-[#050505] w-[290px] h-[250px]"></div>

        {/* Create a Project Card */}
        <div className="p-4 flex flex-col justify-center w-[290px] h-[250px] bg-[#050505]">
          <div className="flex justify-center items-center mt-10">
            <img src={CreateProjectIcon} alt="Draft Icon" className="w-18 h-18" />
          </div>
          <p className="text-[#2F2F2F] f-HelveticaNeueRoman">
            No data to show. Start your first Project
          </p>
          <button
            className="flex justify-center items-center"
            onClick={handleCreateProjectClick} // Add onClick event
          >
            <img src={CreateProjectSecond} alt="Draft Icon" className="w-18 h-18" />
          </button>
        </div>

        {/* Pending Approvals */}
        <div className="bg-[#050505] w-[290px] h-[250px]"></div>

        {/* Second Row - Last Section */}
        <div className="flex flex-col gap-2">
          {/* Completed Projects */}
          <div className="card bg-[#050505] p-4 rounded-lg w-[290px] h-[180px]">
            <h3 className="f-HelveticaNeueRoman text-[#E1FF26]">
              Completed Projects
            </h3>
            <div className="flex justify-center items-center mt-10">
              <div>
                <img src={CompletdIonSecond} alt="Draft Icon" className="w-18 h-18" />
              </div>
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="card bg-[#050505] p-4 rounded-lg w-[290px] h-[180px]">
            <h3 className="font-HelveticaNeueRoman text-[#E1FF26] text-xl">
              Upcoming Meetings
            </h3>
            <div className="flex justify-center items-center mt-10">
              <img
                src={UpcomingMeetingIcon}
                alt="Upcoming meeting icon"
                className="w-5 h-5"
              />
            </div>
            <p className="text-[#2F2F2F] f-HelveticaNeueRoman">
              No meetings! You’ll see all your schedule here.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayoutSecond>
  );
}

export default CreateProject;
