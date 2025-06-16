import moment from "moment";
import React, { useState } from "react";
import { TbUsers } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Avatar from "../avatar/Avatar";
import FileCard from "./FileCard";
import DraftDetailsCard from "./DraftDetailsCard";
import TimelineCard from "./TimelineCard";
import Chip from "../chip/Chip";

const TABS_CONTENT = ["Overview", "Timeline", "Files", "Assets", "Reviews"];

const ProjectDetailsCard = ({
  brand,
  category,
  lastUpdated,
  projectName,
  projectOverview,
  projectObjective,
  projectDuration,
  projectDeadline,
  projectStatus,
  files,
  reviews,
  projectId,
  tabIndex,
  setTabIndex,
}) => {
  /**----- HANDLE UPLOAD FILE ------ */
  const getInputFile = (e) => {
    e.preventDefault();
    console.log("Files", e.target.files[0]);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <header className="h-fit">
        <div className="flex justify-between items-center text-sm opacity-55 ">
          <p>
            All Projects / {brand} / {category}
          </p>
          <p>Last Updated: {moment(lastUpdated).format("MMM DD, YYYY")}</p>
        </div>
        <div className="py-4 flex justify-between items-center">
          <h1 className="text-3xl">{projectName}</h1>
          <div className="flex items-center gap-x-4">
            <div className="flex">
              {[1, 2, 3].map((ele, ind) => (
                <Avatar size={30} border={"#000000"} ind={ind} />
              ))}
            </div>
            <button className="bg-gradient-to-r from-[#e1ff26]  via-[#FF8E8E] to-[#7D22FF] text-xl bg-clip-text text-transparent flex items-center gap-x-2 px-4 py-1.5 rounded-full border-2 border-[#292929]">
              <TbUsers className="text-[#ffe67b]" /> Share
            </button>
          </div>
        </div>
      </header>
      <section className="w-full flex-1 flex flex-col overflow-hidden">
        {/**---------- TABS ------------- */}
        <div className="flex h-fit gap-x-10 pt-6 border-b-2 border-[#292929]">
          {TABS_CONTENT.map((ele, ind) => (
            <p
              className={`font-thin text-lg cursor-pointer w-20 text-center  pb-2 mb-[1.5px] ${
                tabIndex === ind
                  ? "text-[#e1ff26] opacity-100 border-b-2 border-[#e1ff26]"
                  : "opacity-55"
              }`}
              onClick={() => setTabIndex(ind)}
            >
              {ele}
            </p>
          ))}
        </div>
        {/**----------- TABS CONTENT ----------- */}
        <div className="pt-4 w-full flex-1 overflow-hidden">
          {/**----------------------------- OVERVIEW SECTION -------------------------------------- */}
          {tabIndex === 0 && (
            <div className=" w-full h-full pr-2 overflow-y-auto custom-scrollbar scrollbar-sm">
              <div>
                <h5 className="text-lg">Project Overview</h5>
                <p className="text-[15px] opacity-55 font-thin  my-6 ">
                  {`${projectOverview}`}
                </p>
              </div>
              <div>
                <h5 className="text-lg ">Project Objective:</h5>
                <p className="text-[15px] opacity-55 font-thin mt-2">
                  {`${projectObjective}`}
                </p>
              </div>
              <button className="flex items-center bg-[#20201e] px-3 py-2 gap-x-2 text-xs border border-[#343432] rounded-full my-6">
                <FaRegEye /> View Brief
              </button>
              <div className="w-full p-7 bg-[#1b1a1a] rounded-xl text-[15px]">
                <div className="flex items-center gap-x-5">
                  <p>Project Duration: </p>
                  <p className="flex items-center gap-x-1">
                    <MdOutlineWatchLater size={15} className="text-[#e1ff26]" />{" "}
                    {projectDuration}
                  </p>
                  <div className="flex items-center gap-x-2">
                    <Chip
                      text={"2 Days Left"}
                      bgCol={"#e1ff26"}
                      textCol={"#014f59"}
                    />
                    <Chip text={"High"} bgCol={"#ffb2b2"} textCol={"#a93939"} />
                  </div>
                </div>
                <div className="flex items-center gap-x-5 my-5">
                  <p>Project Deadline: </p>
                  <p className="flex items-center gap-x-1">
                    <MdOutlineWatchLater size={15} className="text-[#e1ff26]" />{" "}
                    {moment(projectDeadline).format("Do MMMM, YYYY")}
                  </p>
                  <Chip
                    text={"Delayed"}
                    bgCol={"#ffb2b2"}
                    textCol={"#a93939"}
                  />
                </div>
                <div className="flex items-center gap-x-5">
                  <p>Status: </p>
                  {/* <p
                    className={`text-[11px] px-3 py-1 rounded-full  ${
                      projectStatus === "Completed"
                        ? "text-white bg-green-600"
                        : "text-[#e1ff26] bg-[#3d3e3e]"
                    }`}
                  >
                    {projectStatus}
                  </p> */}
                  <Chip
                    text={projectStatus}
                    bgCol={
                      projectStatus === "Completed" ? "#049668" : "#3d3e3e"
                    }
                    textCol={
                      projectStatus === "Completed" ? "#ffffff" : "#e1ff26"
                    }
                  />
                  <p>Final Draft Shared. Working on feedback.</p>
                </div>
              </div>
            </div>
          )}

          {/**----------------------------- TIMELINE SECTION -------------------------------------- */}
          {tabIndex === 1 && (
            <>
              {/* <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
              /> */}
              <TimelineCard />
            </>
          )}

          {/**----------------------------- FILES SECTION -------------------------------------- */}
          {tabIndex === 2 && (
            <div className="w-full h-full flex flex-col-reverse">
              <div className="h-fit">
                <p className="opacity-55 font-thin">
                  Want to share more files with the designer ? Upload your
                  assets here !
                </p>
                <input
                  type="file"
                  //   className="hidden"
                  hidden
                  id="fileInput"
                  onChange={getInputFile}
                />
                <div className="flex items-center justify-between w-[50%] p-3 py-2 mt-2 bg-[#0c0c0c] rounded-2xl">
                  <p className="opacity-55 font-thin">Upload more files</p>
                  <p
                    className="p-2 px-3 rounded-xl bg-[#161616]  text-[#e1ff26] cursor-pointer"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose file
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex h-fit  items-center gap-x-2 ">
                  <h5 className="text-lg">Project Files: </h5>
                  <p className=" bg-[#121212] text-xs px-2 py-0.5 rounded-full font-medium">
                    08
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar scrollbar-sm my-3">
                  {files?.map((ele, ind) => (
                    <div className="w-1/2">
                      <FileCard
                        key={ind}
                        fileId={ind}
                        fileType={ele?.type}
                        fileName={ele?.name}
                        fileSize={ele?.size}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tabIndex === 3 && (
            <div className="w-full h-full flex flex-col-reverse">
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex h-fit  items-center gap-x-2 ">
                  <h5 className="text-lg">Project Assets: </h5>
                  <p className=" bg-[#121212] text-xs px-2 py-0.5 rounded-full font-medium">
                    08
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar scrollbar-sm mt-3">
                  {files?.map((ele, ind) => (
                    <div className="w-1/2">
                      <FileCard
                        key={ind}
                        fileId={ind}
                        fileType={ele?.type}
                        fileName={ele?.name}
                        fileSize={ele?.size}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/**---------------------------- REVIEWS SECTION ------------------------------------- */}
          {tabIndex === 4 && (
            <div className="w-full h-full overflow-x-hidden overflow-y-auto custom-scrollbar scrollbar-sm  pr-2 flex flex-col gap-y-4">
              {reviews?.map((ele) => (
                <DraftDetailsCard
                  key={ele}
                  draftName={`Draft ${ele}`}
                  projectName={"Illustration Design"}
                  projectId={projectId}
                  draftId={ele}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsCard;
