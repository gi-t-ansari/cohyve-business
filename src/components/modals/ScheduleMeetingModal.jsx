import React, { useEffect, useState } from "react";
import ModalLayout from "./ModalLayout";
import { LuVideo, LuCalendar, LuClock4 } from "react-icons/lu";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import tableReportIconBlue from "../../assets/images/table-report-icon-blue.svg";
import tableReportIconGreen from "../../assets/images/table-report-icon-green.svg";
import tableReportIconRed from "../../assets/images/table-report-icon-red.svg";
import tableReportIconYellow from "../../assets/images/table-report-icon-yellow.svg";
import meetingMemberDummy from "../../assets/images/meeting-member-dummy-image.svg";
import editIcon from "../../assets/images/edit-icon.svg";
import { MdOutlineClose } from "react-icons/md";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setMeeting } from "../../features/meetingSlice";
import { FaClockRotateLeft } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

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

const TeamMemberCard = ({ name, image, handleClose }) => {
  return (
    <div className="h-fit w-fit bg-[#161616] px-[15px] py-[10px] rounded-[15px] flex items-center gap-x-2">
      <div className="h-8 w-8 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </div>
      <p className="text-base">{name}</p>
      <div
        className="h-[21px] ml-1 w-[21px] rounded-full flex justify-center items-center cursor-pointer bg-[#232323]"
        onClick={handleClose}
      >
        <MdOutlineClose />
      </div>
    </div>
  );
};

const ScheduleMeetingModal = ({
  open,
  onClose,
  setOpenMeetingSuccess,
  setMeetingData,
}) => {
  const [activeStep, setActiveStep] = useState(1);
  const [guestErrors, setGuestErrors] = useState("");
  const [projectTeams, setProjectTeams] = useState([]);
  const [scheduling, setScheduling] = useState(false);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    eventTitle: yup.string().required("Event Title is required."),
    project: yup.string().required("Please chose a project."),
    duration: yup.string().required("Duration is required."),
    guests: yup
      .array()
      .optional()
      .of(yup.string().email("Please enter a valid email."))
      .max(5, "You can only add 5 guests")

      .test(
        "unique",
        "Every guest must be unique.",
        (value) => new Set(value).size === value.length
      ),
    notify: yup.string().required("Please specify when other will get notify."),
    notes: yup
      .string()
      .required("Please add a meeting note")
      .max(200, "Note should be maximum of 200 words"),
  });

  const {
    handleSubmit,
    control,
    trigger,
    watch,
    register,
    formState: { errors },
    resetField,
    reset,
    setError,
    clearErrors,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      guests: [],
      guestsInput: "",
    },
  });

  const handleProceed = async () => {
    let output;
    if (activeStep === 0) {
      output = await trigger(["eventTitle", "project"], {
        shouldFocus: true,
      });
    } else if (activeStep === 1) {
      output = await trigger(["duration", "guests", "notify", "notes"], {
        shouldFocus: true,
      });
    }

    if (watch("guests") && watch("guests")?.length === 0) {
      setGuestErrors("Please enter at least one guest.");
      return;
    }

    if (!output) return;

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleScheduleMeeting = (data) => {
    setScheduling(true);
    dispatch(setMeeting(data));
    setMeetingData(data);
    setTimeout(() => {
      onClose();
      setOpenMeetingSuccess(true);
      reset();
      setActiveStep(0);
      setScheduling(false);
    }, 3000);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const emailSchema = yup.string().email();

  const handleAddGuest = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newGuest = event.target.value.trim();
      const currentGuest = getValues("guests") || [];

      if (!emailSchema.isValidSync(newGuest)) {
        setGuestErrors("Invalid Email. Please enter a valid Email.");
        return;
      }

      if (currentGuest.includes(newGuest)) {
        setGuestErrors("This guest has already been added.");
        return;
      }

      if (newGuest && currentGuest.length < 5) {
        setValue("guests", [newGuest, ...currentGuest], {
          shouldValidate: true,
        });
        resetField("guestsInput");
        setGuestErrors("");
      } else {
        setGuestErrors("You can not add more than 5 guests");
      }
    }
  };

  const handleRemoveGuest = (index) => {
    const currentGuests = getValues("guests");
    const updatedGuests = currentGuests.filter((_, i) => i !== index);
    setValue("guests", updatedGuests);
  };

  useEffect(() => {
    if (watch("project")) {
      setProjectTeams(
        projectsData?.find((ele) => ele.name === watch("project"))?.teams
      );
    }
  }, [watch("project")]);

  const handleRemoveTeamMember = (member) => {
    setProjectTeams((prev) => prev?.filter((ele) => ele !== member));
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <form
        className="w-full h-full flex flex-col"
        onSubmit={handleSubmit(handleScheduleMeeting)}
      >
        <div className="flex px-[13px] py-2.5 w-fit h-fit rounded-[10px] bg-[#161616] gap-x-2 items-center text-[#e1ff26]">
          <LuVideo size={15} />
          <p className="text-[11px]">Online Meeting</p>
        </div>
        <div>
          {/**-------------- ADDING MEETING TITLE AND CHOOSING PROJECT ---------------- */}
          {activeStep === 0 && (
            <>
              <h5 className="text-xl mt-3 mb-5">Schedule Meeting</h5>
              <div className="mb-5">
                <div className="flex gap-x-3 mb-1.5 items-center">
                  <LuCalendar size={17} />
                  <span className="text-lg ">Event Details</span>
                </div>
                <div className="w-full h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-[#161616] rounded-[15px]">
                  <input
                    type="text"
                    placeholder="Event title"
                    className="w-full h-full bg-inherit px-4 py-3  text-base placeholder:text-inherit placeholder:opacity-50"
                    {...register("eventTitle")}
                  />
                </div>
                {errors?.eventTitle && (
                  <p className="text-red-500 text-sm ml-4">
                    {errors?.eventTitle?.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex gap-x-3 mb-1.5 items-center">
                  <IoColorPaletteOutline size={17} />
                  <span className="text-lg ">Choose a project</span>
                </div>
                <div className="w-full h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-[#161616] rounded-[15px]">
                  <select
                    {...register("project")}
                    className="bg-inherit py-3 px-4 appearance-none w-full cursor-pointer text-base "
                  >
                    <option value={""}>Search your ongoing project</option>
                    {projectsData.map((ele) => (
                      <option key={ele.id} value={ele.name}>
                        {ele.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors?.project && (
                  <p className="text-red-500 text-sm ml-4">
                    {errors?.project?.message}
                  </p>
                )}
              </div>
              {projectTeams?.length > 0 && (
                <div className="w-full mb-5">
                  <div className="flex gap-x-3 mb-1.5 items-center">
                    <PiUsersThree size={20} />
                    <span className="text-lg ">Your team for the project</span>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {projectTeams?.map((ele) => (
                      <TeamMemberCard
                        key={ele}
                        name={ele}
                        image={meetingMemberDummy}
                        handleClose={() => handleRemoveTeamMember(ele)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {activeStep === 1 && (
            <>
              <header className="flex justify-between items-center  my-5">
                <div className="flex gap-x-4 flex-1 items-center ">
                  <div className="w-[73px] h-[71px] rounded-lg overflow-hidden text-center bg-[#232323]  flex flex-col">
                    <p className="bg-[#353434] text-sm h-fit font-thin">
                      {moment(new Date()).format("MMM")}
                    </p>
                    <h5 className="flex-1  text-4xl  mt-1">
                      {moment(new Date()).format("DD")}
                    </h5>
                  </div>
                  <p className="text-wrap text-lg w-[50%]">
                    {watch("eventTitle") || "Feedback call for website design"}
                  </p>
                </div>
                <div
                  className="h-10 w-[42px] rounded-lg bg-[#161616] flex justify-center items-center cursor-pointer"
                  onClick={handleEdit}
                >
                  <img src={editIcon} alt="edit-icon" />
                </div>
              </header>
              <div className="mb-5">
                <div className="flex gap-x-3 mb-1.5 items-center">
                  <LuClock4 size={17} />
                  <span className="text-lg ">Duration</span>
                </div>
                <div className="w-full h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-[#161616] rounded-[15px]">
                  <input
                    type="text"
                    placeholder="Event title"
                    className="w-full h-full bg-inherit px-4 py-3  text-base placeholder:text-inherit placeholder:opacity-50"
                    {...register("duration")}
                  />
                </div>
                {errors?.duration && (
                  <p className="text-red-500 text-sm ml-4">
                    {errors?.duration?.message}
                  </p>
                )}
              </div>
              <div className="w-full mb-5">
                <div className="flex gap-x-3 mb-1.5 items-center">
                  <PiUsersThree size={20} />
                  <span className="text-lg ">Add Guests</span>
                </div>
                <div>
                  <div className="w-full h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-[#161616] rounded-[15px]">
                    <Controller
                      name="guestsInput"
                      control={control}
                      render={(field) => (
                        <input
                          {...field}
                          type="email"
                          placeholder="Enter email id, name"
                          // value={watch("guestsInput")}
                          className="w-full h-full bg-inherit px-4 py-3  text-base placeholder:text-inherit placeholder:opacity-50"
                          onKeyDown={handleAddGuest}
                        />
                      )}
                    />
                  </div>
                  {errors?.guests?.message && (
                    <p className="text-red-500 text-sm ml-4">
                      {errors?.guests?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5 w-full flex gap-4 flex-wrap">
                <div className="h-fit w-fit bg-[#161616] px-[15px] py-[10px] rounded-[15px] flex items-center gap-x-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={meetingMemberDummy}
                      alt={"rupesh"}
                    />
                  </div>
                  <div>
                    <p className="text-base leading-none">Rupesh Kumar</p>
                    <span className="text-xs leading-none font-thin opacity-50">
                      Organizer
                    </span>
                  </div>
                </div>
                {watch("guests") &&
                  [...watch("guests")]?.map((ele, ind) => (
                    <TeamMemberCard
                      key={ele}
                      name={ele}
                      image={meetingMemberDummy}
                      handleClose={() => handleRemoveGuest(ind)}
                    />
                  ))}
              </div>
              <div className="mb-5">
                <div className="w-full relative h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-inherit rounded-[15px]">
                  <select
                    {...register("notify")}
                    className="bg-[#0d0e0e] py-3 px-4 pl-6 appearance-none w-full cursor-pointer text-base focus:outline-none"
                  >
                    <option value={"15 minutes"}>Notify 15 min before</option>
                    <option value={"30 minutes"}>Notify 30 min before</option>
                    <option value={"1 hour"}>Notify 1 hour before</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 top-1 flex items-center pointer-events-none ">
                    <RiArrowDownSLine size={20} />
                  </span>
                  <span className="absolute inset-y-0 left-0 top-0.5 flex items-center pointer-events-none ">
                    <FaClockRotateLeft />
                  </span>
                </div>
                {errors?.notify && (
                  <p className="text-red-500 text-sm ml-4">
                    {errors?.notify?.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <div className="flex gap-x-3 mb-1.5 items-center">
                  <HiOutlineMenuAlt2 size={20} />
                  <span className="text-lg ">Add Description</span>
                </div>
                <div className="w-full h-fit overflow-hidden flex items-center justify-between  text-[15px]  bg-[#161616] rounded-[15px]">
                  <input
                    type="text"
                    placeholder="Share any notes or meeting agenda"
                    className="w-full h-full bg-inherit px-4 py-3  text-base placeholder:text-inherit placeholder:opacity-50"
                    {...register("notes")}
                  />
                </div>
                {errors?.notes && (
                  <p className="text-red-500 text-sm ml-4">
                    {errors?.notes?.message}
                  </p>
                )}
              </div>
            </>
          )}

          {/**--------------- PROCEED AND SUBMIT BUTTON ------------------- */}
          {activeStep === 0 && (
            <button
              onClick={handleProceed}
              className="w-full text-center py-[15px] bg-[#161616] text-[#e1ff26] rounded-[15px]"
            >
              Proceed
            </button>
          )}
          {activeStep === 1 && (
            <button
              type="submit"
              disabled={scheduling}
              className={`w-full flex justify-center items-center py-[15px] bg-[#161616] text-[#e1ff26] rounded-[15px] ${
                scheduling && "cursor-not-allowed"
              }`}
            >
              {scheduling ? (
                <div className="h-5 w-5 transition-all duration-300 ease-linear">
                  <div className="h-full w-full animate-spin rounded-full border-y-2 border-[#E1ff26] opacity-55 transition-all duration-300 ease-linear"></div>
                </div>
              ) : (
                "Schedule Meeting"
              )}
            </button>
          )}
        </div>
      </form>
    </ModalLayout>
  );
};

export default ScheduleMeetingModal;
