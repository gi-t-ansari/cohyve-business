import React, { useEffect, useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import ProjectCard from "../../components/cards/ProjectCard";
import ProjectDetailsCard from "../../components/cards/ProjectDetailsCard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import ProjectDetailsCardSkeleton from "../../components/skeletons/ProjectDetailsCardSkeleton";
import Skeleton from "react-loading-skeleton";
import tableReportIconBlue from "../../assets/images/table-report-icon-blue.svg";
import tableReportIconGreen from "../../assets/images/table-report-icon-green.svg";
import tableReportIconRed from "../../assets/images/table-report-icon-red.svg";
import tableReportIconYellow from "../../assets/images/table-report-icon-yellow.svg";
import { IoMdClose } from "react-icons/io";
import DraftCardExpanded from "../../components/cards/DraftCardExpanded";

const projectsData = [
  { count: 45, status: "Upcoming" },
  { count: 10, status: "Ongoing" },
  { count: 3, status: "Overdue" },
  { count: 32, status: "Completed" },
];

const projects = [
  {
    id: 1,
    icon: tableReportIconBlue,
    color: "blue",
    name: "Illustration Design",
    status: "Not Started",
    description: "Designed a food website called Foodworld.",
    overview:
      "This project focuses on creating a user-friendly and visually appealing website for a food-related platform. The website will serve as a central hub for users to explore a vast collection of recipes, learn about ingredients, and engage with a community of food enthusiasts. Key functionalities include browsing, saving, and filtering recipes by various parameters such as cuisine, dietary restrictions, and preparation time. The design aims to balance functionality with aesthetic appeal, providing a seamless user experience across devices.",
    objective:
      "To build an intuitive and responsive user interface that showcases a broad selection of recipes. Key objectives include developing effective filter options for ease of use, supporting user-generated content and community engagement through features like comments and ratings, and incorporating appetizing imagery for visual appeal. Accessibility and mobile-friendliness are prioritized to ensure an inclusive user experience.",
    duration: "3 Weeks",
    deadline: "2024-12-10",
    brand: "Zomato",
    category: "Food Website",
    lastUpdated: "2024-11-10",
    files: [
      { id: 1, name: "i9", type: "pdf", size: "9mb" },
      { id: 2, name: "i2", type: "jpg", size: "4mb" },
      { id: 3, name: "i3", type: "docx", size: "2mb" },
      { id: 4, name: "i4", type: "xxl", size: "15mb" },
      { id: 5, name: "i5", type: "pdf", size: "7mb" },
    ],
    teams: [1, 2, 3],
    reviews: [1, 2],
  },
  {
    id: 2,
    icon: tableReportIconRed,
    color: "red",
    name: "E-Commerce Revamp",
    status: "In Progress",
    description: "Revamped an e-commerce website's UI.",
    overview:
      "This project focused on modernizing an e-commerce platform to enhance user experience and drive sales. The redesign includes improvements in navigation, product visibility, and checkout processes to create a seamless, engaging shopping journey. Special attention was given to mobile and cross-device usability, ensuring that users could enjoy a consistent experience regardless of their browsing device. The project also integrates dynamic elements, such as recommended products and personalized shopping suggestions, to enrich the browsing experience.",
    objective:
      "The primary objective was to boost user engagement and conversion rates. Key goals included making navigation intuitive, enhancing filter and search functionalities, simplifying the checkout process, and using engaging visual elements to attract and retain customers. The design ensures fast loading times, mobile responsiveness, and accessible layout for improved site usability.",
    duration: "4 Weeks",
    deadline: "2024-11-30",
    brand: "Amazon",
    category: "Shopping Website",
    lastUpdated: "2024-11-09",
    files: [
      { id: 1, name: "e1", type: "pdf", size: "10mb" },
      { id: 2, name: "e2", type: "jpg", size: "5mb" },
      { id: 3, name: "e3", type: "docx", size: "3mb" },
      { id: 4, name: "e4", type: "pdf", size: "6mb" },
      { id: 5, name: "e5", type: "xxl", size: "12mb" },
    ],
    teams: [4, 5, 6],
    reviews: [3, 4],
  },
  {
    id: 3,
    icon: tableReportIconYellow,
    color: "yellow",
    name: "Recipe App UI",
    status: "First Draft",
    description: "Designed UI for a recipe app.",
    overview:
      "The aim of this project was to design a vibrant and user-friendly interface for a recipe app, intended for mobile use. The app allows users to explore, save, and share various recipes from different cuisines. The design emphasizes easy navigation and appealing visuals that make discovering and preparing recipes enjoyable. With extensive filtering options and an intuitive layout, the app also integrates user-generated content, allowing users to review and rate recipes.",
    objective:
      "To create an engaging mobile interface that provides quick and easy access to recipes. Specific goals include developing a highly responsive design, supporting content personalization based on user preferences, and ensuring an inclusive experience by following accessibility standards. The UI is optimized for small screens, with features like quick filters, favorites, and recommendations to enhance user satisfaction.",
    duration: "2 Weeks",
    deadline: "2024-12-20",
    brand: "Zomato",
    category: "Mobile App",
    lastUpdated: "2024-11-08",
    files: [
      { id: 1, name: "r1", type: "jpg", size: "8mb" },
      { id: 2, name: "r2", type: "pdf", size: "3mb" },
      { id: 3, name: "r3", type: "xxl", size: "13mb" },
      { id: 4, name: "r4", type: "pdf", size: "4mb" },
      { id: 5, name: "r5", type: "docx", size: "2mb" },
    ],
    teams: [7, 8, 9],
    reviews: [5, 6],
  },
  {
    id: 4,
    icon: tableReportIconGreen,
    color: "green",
    name: "Fashion Lookbook",
    status: "Revision",
    description: "Developed a digital lookbook for fashion.",
    overview:
      "This project was about creating a digital lookbook for a seasonal fashion collection, showcasing various outfits and styles in a visually captivating manner. Targeted at a young, fashion-forward audience, the design combines high-resolution images and smooth transitions to present fashion trends. The lookbook incorporates interactive elements, allowing users to explore outfit details and seamlessly navigate between different styles.",
    objective:
      "The primary objective was to create an immersive, visually appealing experience that reflects the brand’s aesthetic and entices users. Key goals included enhancing interactivity, providing a smooth browsing experience, and enabling shopping links for easy purchasing. The lookbook is designed to be mobile-friendly and accessible across various devices.",
    duration: "3 Weeks",
    deadline: "2024-12-15",
    brand: "H&M",
    category: "Fashion Website",
    lastUpdated: "2024-11-07",
    files: [
      { id: 1, name: "f1", type: "pdf", size: "5mb" },
      { id: 2, name: "f2", type: "jpg", size: "9mb" },
      { id: 3, name: "f3", type: "docx", size: "4mb" },
      { id: 4, name: "f4", type: "xxl", size: "14mb" },
      { id: 5, name: "f5", type: "pdf", size: "6mb" },
    ],
    teams: [10, 11, 12],
    reviews: [7, 8],
  },
  {
    id: 5,
    icon: tableReportIconBlue,
    color: "blue",
    name: "Marketplace Optimization",
    status: "Final Draft",
    description: "Enhanced a marketplace platform's UI.",
    overview:
      "This project focused on optimizing the user experience and interface of a marketplace platform by streamlining navigation, enhancing filter options, and improving loading speed. The design aimed to facilitate easy product search and discovery for users. Key improvements include faster loading times, simplified layouts, and more intuitive category-based filtering to make the shopping experience smoother and more efficient.",
    objective:
      "The objective was to improve the site’s overall usability and performance. Specific goals included boosting loading speed, enhancing filter and search functionalities, and ensuring cross-device compatibility. The redesign prioritizes user engagement through an optimized and visually cohesive layout.",
    duration: "5 Weeks",
    deadline: "2024-12-01",
    brand: "Flipkart",
    category: "E-Commerce",
    lastUpdated: "2024-11-06",
    files: [
      { id: 1, name: "m1", type: "docx", size: "4mb" },
      { id: 2, name: "m2", type: "pdf", size: "7mb" },
      { id: 3, name: "m3", type: "jpg", size: "5mb" },
      { id: 4, name: "m4", type: "xxl", size: "11mb" },
      { id: 5, name: "m5", type: "pdf", size: "6mb" },
    ],
    teams: [13, 14, 15],
    reviews: [9, 10],
  },
  {
    id: 6,
    icon: tableReportIconRed,
    color: "red",
    name: "Travel Blog UI Design",
    status: "Completed",
    description: "Created a UI for a travel blog platform.",
    overview:
      "This project aimed to design a sleek and intuitive interface for a travel blog, where users can share travel stories, tips, and photos. The platform encourages community engagement and aims to be a go-to resource for travel enthusiasts. The design emphasizes readability, easy navigation, and seamless media integration, allowing users to enjoy a smooth browsing experience as they explore diverse travel content.",
    objective:
      "The primary goal was to build a user-friendly, visually engaging platform that encourages user interaction and content sharing. Key objectives included enhancing readability, supporting multimedia posts (videos, photos), and ensuring a responsive layout across devices. Accessibility considerations were prioritized to offer a seamless experience for all users.",
    duration: "4 Weeks",
    deadline: "2025-01-05",
    brand: "Lonely Planet",
    category: "Blog Website",
    lastUpdated: "2024-11-05",
    files: [
      { id: 1, name: "t1", type: "pdf", size: "8mb" },
      { id: 2, name: "t2", type: "jpg", size: "6mb" },
      { id: 3, name: "t3", type: "docx", size: "2mb" },
      { id: 4, name: "t4", type: "xxl", size: "12mb" },
      { id: 5, name: "t5", type: "pdf", size: "5mb" },
    ],
    teams: [16, 17, 18],
    reviews: [11, 12],
  },
];

const projectStatus = [
  "Not Started",
  "In Progress",
  "First Draft",
  "Revision",
  "Final Draft",
  "Completed",
];

function Analytics() {
  const [searchParams] = useSearchParams();
  const initialProjectId = Number(searchParams.get("project")) || 1;
  const [isListView, setIsListView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(initialProjectId);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(!location?.search?.includes("draft"));

  useEffect(() => {
    const projectParam = Number(searchParams.get("project"));
    const draftParam = Number(searchParams.get("draft"));
    if (projectParam) {
      setSelectedProject(projectParam);
    }

    if (draftParam) {
      setSelectedDraft(draftParam);
    }
  }, [searchParams]);

  const handleFilter = (e) => {
    e.preventDefault();
    setFilteredProjects(
      projects?.filter((ele) => ele?.status === e?.target?.value)
    );
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    if (projects?.length > filteredProjects?.length) {
      setFilteredProjects(projects);
    }
  };

  return (
    <DashboardLayoutSecond>
      <div className="text-[#fcfcd8] bg-[#0d0e0e] w-full h-full overflow-hidden   p-4  flex gap-x-8 ">
        <section className="basis-[49%] h-full flex flex-col">
          <div className="h-fit bg-inherit  flex justify-between">
            {projectsData.map((ele) => (
              <div className="basis-[23%] py-3 bg-[#050505] rounded-[26px] flex flex-col items-center ">
                <h2 className="text-[45px]">{ele.count}</h2>
                <p className="text-[15px] opacity-55 font-thin ">
                  {ele.status}
                </p>
              </div>

              // ------------ SKELETON --------------------
              // <div className="flex flex-col items-center gap-y-3">
              //   <h2 className="text-4xl text-[#e1ff26]">
              //     <Skeleton width={40} height={40} />
              //   </h2>
              //   <p className="text-[15px]">
              //     <Skeleton width={100} height={20} />
              //   </p>
              // </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="flex h-fit justify-between items-center p-8 py-5 bg-[#050505] rounded-[26px] my-4">
              <div className="flex items-center gap-x-3">
                <h5>Filter By</h5>
                <div className="relative inline-block ">
                  <select
                    onChange={handleFilter}
                    className="bg-[#141414] py-2 px-4 pr-10 rounded-full appearance-none w-full cursor-pointer"
                  >
                    {projectStatus.map((ele) => (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none ">
                    <RiArrowDownSLine size={20} />
                  </span>
                </div>
                <p
                  className={`${
                    projects?.length > filteredProjects?.length
                      ? "opacity-100 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  } text-xs`}
                  onClick={handleClearFilter}
                >
                  Clear Filter
                </p>
                {/**----------- SKELETON ------------ */}
                {/* <p>
                  <Skeleton width={150} height={30} />
                </p> */}
              </div>
              <div className="flex items-center gap-x-4">
                <p>View By</p>
                <div className="flex items-center gap-x-2">
                  <CiGrid2H
                    size={24}
                    className={`${
                      isListView ? "opacity-100" : "opacity-10"
                    } cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setIsListView(true)}
                  />
                  <IoGridOutline
                    size={24}
                    className={`${
                      isListView && "opacity-10"
                    } cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setIsListView(false)}
                  />
                </div>
                {/**----------- SKELETON --------------- */}
                {/* <Skeleton width={24} height={24} />
                <Skeleton width={24} height={24} /> */}
              </div>
            </header>
            <div className="w-full flex-1 pr-2 flex justify-between flex-wrap gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
              {filteredProjects.map((ele, ind) => (
                <div
                  className={`${
                    isListView ? "basis-[100%]" : "basis-[48%]"
                  } transition-all duration-300 ease-linear`}
                >
                  <ProjectCard
                    id={ele.id}
                    isListView={isListView}
                    projectName={ele.name}
                    deadline={ele.deadline}
                    teams={ele.teams}
                    status={ele.status}
                    description={ele.description}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                    icon={ele?.icon}
                    color={ele?.color}
                    setTabIndex={setTabIndex}
                  />
                </div>
              ))}
              {/**--------- SKELETON ------------ */}
              {/* {[1, 2].map((_, i) => (
                <div className="basis-[48%]">
                  <ProjectCardSkeleton />
                </div>
              ))} */}
            </div>
          </div>
        </section>
        <section className="basis-[47%] overflow-hidden h-full bg-[#050505] rounded-[28px] p-6 py-4">
          {!location?.search?.includes("draft") &&
            projects
              .filter((ele) => ele.id === selectedProject)
              .map((ele, ind) => (
                <ProjectDetailsCard
                  brand={ele.brand}
                  category={ele.category}
                  lastUpdated={ele.lastUpdated}
                  projectName={ele.name}
                  projectOverview={ele.overview}
                  projectObjective={ele.objective}
                  projectDuration={ele.duration}
                  projectStatus={ele.status}
                  files={ele.files}
                  reviews={ele.reviews}
                  projectId={ele.id}
                  tabIndex={tabIndex}
                  setTabIndex={setTabIndex}
                />
              ))}
          {location?.search?.includes("draft") &&
            location?.search?.includes("project") && (
              <DraftCardExpanded
                selectedDraft={selectedDraft}
                setTabIndex={setTabIndex}
              />
            )}
          {/**----------------- SKELETON ------------- */}
          {/* <ProjectDetailsCardSkeleton /> */}
        </section>
      </div>
    </DashboardLayoutSecond>
  );
}

export default Analytics;
