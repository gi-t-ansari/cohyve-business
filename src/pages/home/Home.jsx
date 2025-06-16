import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import CreateProjectCard from "../../components/cards/CreateProjectCard";
import DraftsCard from "../../components/cards/DraftsCard";
import ApprovalsCard from "../../components/cards/ApprovalsCard";
import { BiSort } from "react-icons/bi";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import ProjectCard from "../../components/cards/ProjectCard";
import GetPremiumCard from "../../components/cards/GetPremiumCard";
import CompletedProjectsCard from "../../components/cards/CompletedProjectsCard";
import UpcomingMeetingsCard from "../../components/cards/UpcomingMeetingsCard";
import { HiOutlineCircleStack } from "react-icons/hi2";
import CreateProjectCardSkeleton from "../../components/skeletons/CreateProjectCardSkeleton";
import DraftsCardSkeleton from "../../components/skeletons/DraftsCardSkeleton";
import Skeleton from "react-loading-skeleton";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import GetPremiumCardSkeleton from "../../components/skeletons/GetPremiumCardSkeleton";
import CompletedProjectsCardSkeleton from "../../components/skeletons/CompletedProjectsCardSkeleton";
import UpcomingMeetingsCardSkeleton from "../../components/skeletons/UpcomingMeetingsCardSkeleton";
import tableReportIconBlue from "../../assets/images/table-report-icon-blue.svg";
import tableReportIconGreen from "../../assets/images/table-report-icon-green.svg";
import tableReportIconRed from "../../assets/images/table-report-icon-red.svg";
import tableReportIconYellow from "../../assets/images/table-report-icon-yellow.svg";

const projectsData = [
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

function Home() {
  const [isListView, setIsListView] = useState(false);
  const [projects, setProjects] = useState([1]);
  const [selectedProject, setSelectedProject] = useState(1);

  return (
    <DashboardLayoutSecond>
      <div className="text-[#fcfcd8] bg-[#0d0e0e] w-full h-full  p-4 flex gap-x-8">
        <section className="basis-[70%] h-full flex flex-col">
          <div className="w-full h-56 flex justify-between ">
            <CreateProjectCard />
            <DraftsCard drafts={4} />
            <ApprovalsCard approvals={4} />
            {/**-------- SKELETON --------------*/}
            {/* <CreateProjectCardSkeleton />
            <DraftsCardSkeleton />
            <DraftsCardSkeleton /> */}
          </div>
          <div className="w-full flex-1 overflow-hidden flex flex-col">
            <header className="w-full my-5 flex justify-between items-center  px-2">
              <h5 className="text-xl">Your Projects</h5>
              {/**----------- SKELETON ------------ */}
              {/* <h5>
                <Skeleton width={112} height={24} />
              </h5> */}
              <div className="flex items-center gap-x-4">
                <p className="flex items-center gap-x-1 text-sm">
                  Sort By <BiSort size={13} />
                </p>
                {/**---------- SKELETON ----------- */}
                {/* <p>
                  <Skeleton width={64} height={18} />
                </p> */}
                <div className="flex items-center gap-x-2">
                  <CiGrid2H
                    size={19}
                    className={`${
                      isListView ? "opacity-100" : "opacity-10"
                    } cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setIsListView(true)}
                  />
                  <IoGridOutline
                    size={19}
                    className={`${
                      isListView && "opacity-10"
                    } cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setIsListView(false)}
                  />
                </div>
                {/**----------- SKELETON ------------- */}
                {/* <div className="flex items-center gap-x-2">
                  <Skeleton width={19} height={19} />
                  <Skeleton width={19} height={19} />
                </div> */}
              </div>
            </header>
            <div
              className={`w-full flex-1 pr-2 flex justify-between flex-wrap
                gap-4 overflow-y-auto custom-scrollbar scrollbar-md`}
            >
              {projects?.length > 0 ? (
                <>
                  {projectsData.map((ele, ind) => (
                    <div
                      className={`${
                        isListView ? "basis-[100%]" : "basis-[32%]"
                      } `}
                    >
                      <ProjectCard
                        id={ele.id}
                        isListView={isListView}
                        projectName={ele.name}
                        status={ele.status}
                        description={ele.description}
                        teams={ele.teams}
                        deadline={ele.deadline}
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        icon={ele?.icon}
                        color={ele?.color}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="basis-[32%] h-full p-4 bg-[#050505] rounded-3xl"></div>
                  <div className="basis-[32%] h-full p-4 bg-[#050505] rounded-3xl flex flex-col justify-center items-center gap-y-6">
                    <HiOutlineCircleStack
                      size={30}
                      className="text-[#fff67b]"
                    />
                    <p className="text-sm font-thin opacity-55">
                      No data to show. Start your first project
                    </p>
                    <div className="relative cursor-pointer">
                      <button className="px-4 py-2 text-[#fff67b] border-2 z-40 border-[#141414] bg-[#0D0E0EC9]  rounded-2xl ">
                        + Create Project
                      </button>
                      <div class="absolute w-[70%] z-10 h-[110%] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] inset-0 rounded-full blur-md bg-gradient-to-r from-[#00FB8780] to-[#7D22FF80] opacity-40"></div>
                    </div>
                  </div>
                  <div className="basis-[32%] h-full p-4 bg-[#050505] rounded-3xl"></div>
                </>
              )}
              {/**------- SKELETON -------- */}
              {/* {[1, 2, 3].map((_, ind) => (
                <div className="basis-[32%]">
                  <ProjectCardSkeleton />
                </div>
              ))} */}
            </div>
          </div>
        </section>
        <section className="basis-[25%] h-full flex flex-col gap-y-3 justify-between">
          <GetPremiumCard />
          <CompletedProjectsCard projects={1} />
          <UpcomingMeetingsCard meetings={1} />
          {/**--------- SKELETON --------- */}
          {/* <GetPremiumCardSkeleton />
          <CompletedProjectsCardSkeleton />
          <UpcomingMeetingsCardSkeleton /> */}
        </section>
      </div>
    </DashboardLayoutSecond>
  );
}

export default Home;
