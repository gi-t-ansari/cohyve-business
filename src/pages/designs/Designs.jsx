import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import CreateProjectFrom from "../../components/createProjectForm/CreateProjectFrom";
import servicePenIcon from "../../assets/images/service-pen-icon.svg";
import projectTypeIcon from "../../assets/images/project-type-icon.svg";
import projectStyleIcon from "../../assets/images/style-brush-icon.svg";
import projectApplicationIcon from "../../assets/images/application-type-icon.svg";
import projectBriefIcon from "../../assets/images/project-brief-file-icon.svg";
import expertiseIcon from "../../assets/images/expertise-batch-icon.svg";
import tickIcon from "../../assets/images/tic-icon.svg";

const Designs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [allValues, setAllValues] = useState(null);

  const CREATING_PROJECTS_STEPS = [
    {
      formName: "Select a service",
      name: "Service",
      image: servicePenIcon,
      value: allValues?.selectedService,
    },
    {
      formName: "Choose one",
      name: "Project Type",
      image: projectTypeIcon,
      value: allValues?.projectType,
    },
    {
      formName: "Which of the following style references do you prefer ?",
      name: "Style",
      image: projectStyleIcon,
      value: allValues?.projectStyle,
    },
    {
      formName: "Please proceed with the project brief.",
      name: "Application",
      image: projectApplicationIcon,
      value: allValues?.projectApplication,
    },
    {
      formName:
        "Please choose what is the level of designer you want to work with ?",
      name: "Project Brief",
      image: projectBriefIcon,
      value: allValues?.projectName,
    },
    {
      formName:
        "Please choose what is the level of designer you want to work with ?",
      name: "Expertise",
      image: expertiseIcon,
      value: allValues?.designerLevel,
    },
  ];

  const handleChangeStep = (index, value) => {
    if (activeStep > index || value) {
      setActiveStep(index);
    }
  };
  return (
    <DashboardLayoutSecond>
      <div className=" w-full h-full flex">
        <section className="basis-[15%] bg-inherit p-4 flex flex-col gap-y-4">
          {CREATING_PROJECTS_STEPS.map((ele, ind) => (
            <div
              key={ind}
              className={`${
                activeStep === ind ? "bg-[#040404]" : "bg-[#171818]"
              } ${
                (activeStep > ind || ele?.value) && "cursor-pointer"
              } pl-[1rem] relative items-center py-[0.7rem] flex justify-start rounded-[1rem] transition-all duration-300 ease-linear`}
              onClick={() => handleChangeStep(ind, ele?.value)}
            >
              <div className="basis-[20%]">
                <img src={ele.image} alt={ele.name} />
              </div>

              <div className={`flex flex-col basis-[60%] gap-y-0.5`}>
                <span className="f-HelveticaNeueLight text-sm tracking-tight leading-[1rem]">
                  {ele.name}
                </span>
                <span className="f-HelveticaNeueLight font-thin text-xs opacity-55 tracking-tight  ">
                  {ele?.value ? ele?.value : "-"}
                </span>
              </div>
              {(activeStep > ind || ele?.value) && (
                <div className="h-[19px] w-[19px] right-4 absolute flex justify-center items-center rounded-full bg-[#2e2e2e] transition-all duration-300 ease-linear">
                  <img src={tickIcon} alt="tick" />
                </div>
              )}
              {activeStep === ind && (
                <div
                  className="h-[1px] w-[60%] absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-linear"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(252, 252, 216, 0) 0%, #FCFCD8 50%, rgba(252, 252, 216, 0) 100%)",
                  }}
                ></div>
              )}
            </div>
          ))}
        </section>

        <CreateProjectFrom
          steps={CREATING_PROJECTS_STEPS}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setAllValues={setAllValues}
        />
      </div>
    </DashboardLayoutSecond>
  );
};

export default Designs;

// import React, { useState } from "react";
// import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
// import { PiPenNibStraight } from "react-icons/pi";
// import { IoGridOutline } from "react-icons/io5";

// function Designs() {
//   const [currentStep, setCurrentStep] = useState(0);

//   return (
//     <DashboardLayoutSecond>
//       <div className="text-[#fcfcd8] bg-[#0d0e0e] w-full h-full  rounded-tl-[38px] flex overflow-hidden">
//         <section className="basis-[18%] bg-inherit p-4 flex flex-col gap-y-4">
//           {CREATING_PROJECTS_STEPS.map((ele, ind) => (
//             <div className="flex items-center gap-x-3 w-full bg-[#040404] p-4 rounded-2xl">
//               <ele.icon
//                 size={20}
//                 className={`${ind === 0 && "rotate-180"} text-[#e1ff26]`}
//               />
//               <p className="text-[15px] ">{ele.name}</p>
//             </div>
//           ))}
//         </section>
//         <section className="basis-[82%] bg-[#111111]"></section>
//       </div>
//     </DashboardLayoutSecond>
//   );
// }

// export default Designs;
