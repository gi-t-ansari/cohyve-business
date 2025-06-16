import React, { useEffect, useRef } from "react";
import reportIcon from "../../assets/images/report-icon.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import Avatar from "../avatar/Avatar";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectCard = ({
  id,
  description,
  projectName,
  status,
  teams,
  deadline,
  isListView,
  selectedProject,
  setSelectedProject,
  icon,
  color,
  setTabIndex,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSelectProject = (e) => {
    e.preventDefault();
    setTabIndex(0);
    navigate(`/analytics?project=${id}`);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    if (selectedProject === id && pathname?.includes("analytics")) {
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedProject, id]);

  return isListView ? (
    <div
      ref={cardRef}
      className={`w-full h-fit p-4 relative ${
        pathname.includes("analytics") && selectedProject === id
          ? "bg-[#050505] border-[1px] border-[#FCFCD81A]"
          : "bg-[#171818] border-[1px] border-transparent"
      } flex justify-between rounded-[26px] cursor-pointer  transition-all duration-300 ease-linear`}
      onClick={handleSelectProject}
    >
      <div className="flex flex-col items-start basis-[50%]">
        <p className=" opacity-55 font-thin">Project Name:</p>
        <div className="mt-2 mb-4 flex items-center gap-x-4">
          <div className="flex  items-center gap-x-2">
            <div
              className={`p-2 rounded-xl ${color === "blue" && "bg-[#7D22FF38]"}
              ${color === "red" && "bg-[#FF8E8E1A]"}
              ${color === "yellow" && "bg-[#E1FF261A]"}
              ${color === "green" && "bg-[#00FB871A]"}`}
            >
              <img width={28} src={icon} alt="report-icon" />
            </div>
            <h6 className="text-[15px]">{projectName}</h6>
          </div>
          <p className="text-[#e1ff26] bg-[#1c2016] px-2 py-1 rounded-lg flex items-center gap-x-1 text-sm">
            {status}
          </p>
        </div>
        <p className=" font-thin opacity-55 mb-5">{description}</p>
        <p className="flex items-center  gap-x-1 opacity-55">
          <MdOutlineWatchLater
            size={18}
            className="text-[#e1ff26] opacity-100 -mb-0.5"
          />
          Deadline: {moment(deadline).format("MMM DD, YYYY")}
        </p>
      </div>
      <div className="flex flex-col items-end basis-[45%] justify-between">
        <div className="flex flex-col items-end mr-4 mt-3">
          <p className=" font-thin opacity-55 mb-2">Team</p>
          <div className="flex relative -right-5">
            {teams.map((ele, ind) => (
              <Avatar size={38} ind={ind} />
            ))}
          </div>
        </div>
        <div className="flex gap-x-3">
          <button className="text-sm items-center  bg-[#1b1a1a] px-3 py-2.5 rounded-xl">
            View Drafts
          </button>
          <button className="flex gap-x-1 justify-center items-center text-sm text-center bg-[#1c2016] text-[#e1ff26] px-3 py-2.5 rounded-xl">
            <RiMessage2Line size={16} className="-mb-1" />
            Comment
          </button>
        </div>
      </div>
      {pathname.includes("analytics") && selectedProject === id && (
        <div
          className="h-[1px] w-[60%] absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-linear"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 252, 216, 0) 0%, #e1ff26 50%, rgba(252, 252, 216, 0) 100%)",
          }}
        ></div>
      )}
    </div>
  ) : (
    <div
      ref={cardRef}
      className={`w-full h-fit p-4 relative ${
        pathname.includes("analytics") && selectedProject === id
          ? "bg-[#050505] border-[1px] border-[#FCFCD81A]"
          : "bg-[#171818] border-[1px] border-transparent"
      } rounded-[26px] cursor-pointer  transition-all  duration-300 ease-linear`}
      onClick={handleSelectProject}
    >
      <header>
        <p className="text-sm opacity-55 font-thin">Project Name:</p>
        <div className="my-2 flex justify-between items-center">
          <div className="flex  items-center gap-x-2">
            <div
              className={`p-2 rounded-xl ${color === "blue" && "bg-[#7D22FF38]"}
              ${color === "red" && "bg-[#FF8E8E1A]"}
              ${color === "yellow" && "bg-[#E1FF261A]"}
              ${color === "green" && "bg-[#00FB871A]"}`}
            >
              <img width={28} src={icon} alt="report-icon" />
            </div>
            <h6 className="text-[15px] flex flex-col ">
              <span>{projectName?.split(" ")[0]}</span>
              <span>{projectName?.split(" ")[1]}</span>
            </h6>
          </div>
          <p className="text-[#e1ff26] bg-[#1c2016] px-2 py-1 rounded-lg flex items-center gap-x-1 text-sm">
            {status}
          </p>
        </div>
      </header>
      <section className="my-8">
        <p className="text-sm font-thin opacity-55">{description}</p>
        <div className="my-6">
          <p className="text-sm font-thin opacity-55 mb-1">Team</p>
          <div className="flex">
            {teams.map((ele, ind) => (
              <Avatar size={24} ind={ind} />
            ))}
          </div>
        </div>
        <p className="flex items-center text-sm gap-x-1 opacity-55">
          <MdOutlineWatchLater
            size={18}
            className="text-[#e1ff26] opacity-100 -mb-0.5"
          />
          Deadline: {moment(deadline).format("MMM DD, YYYY")}
        </p>
      </section>
      <footer className="w-full flex justify-between mt-3">
        <button className=" basis-[48%] text-[15px] items-center  bg-[#121212] py-3.5 rounded-[15px]">
          <span className="opacity-55">View Drafts</span>
        </button>
        <button className="basis-[48%] flex gap-x-1 justify-center items-center text-[15px] text-center bg-[#121212] py-3.5 rounded-[15px]">
          <RiMessage2Line size={16} className="-mb-1 text-[#e1ff26]" />
          Comment
        </button>
      </footer>
      {pathname.includes("analytics") && selectedProject === id && (
        <div
          className="w-[1px] h-[60%] absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ease-linear"
          style={{
            background:
              "linear-gradient(180deg, rgba(252, 252, 216, 0) 0%, #e1ff26 50%, rgba(252, 252, 216, 0) 100%)",
          }}
        ></div>
      )}
    </div>
  );
};

export default ProjectCard;
