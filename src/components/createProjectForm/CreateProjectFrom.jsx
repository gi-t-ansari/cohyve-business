import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdClose, IoMdArrowBack } from "react-icons/io";
import IllustrationImg from "../../assets/images/illustration.svg";
import SocialMediaImg from "../../assets/images/SocialMedia.svg";
import WebUIUXImg from "../../assets/images/WebUIUX.svg";
import IconImg from "../../assets/images/Icon.svg";
import InfographicsImg from "../../assets/images/inforgraphics.svg";
import LandingPageImg from "../../assets/images/landingPage.svg";
import BrandStationaryImg from "../../assets/images/BrandStationary.svg";
import LogoDesignImg from "../../assets/images/Logo.svg";
import AnimeImg from "../../assets/images/AnimeImage.svg";
import CaricatureImg from "../../assets/images/CaricatureImage.svg";
import CartoonImage from "../../assets/images/CartoonImage.svg";
import ComicsImage from "../../assets/images/ComicsImage.svg";
import CommercialImage from "../../assets/images/CommercialImage.svg";
import ConceptArtImage from "../../assets/images/ConceptArtImage.svg";
import FantasyImage from "../../assets/images/FantasyImage.svg";
import RetroImage from "../../assets/images/RetroImage.svg";
import WebsiteImage from "../../assets/images/WebsiteImage.svg";
import ProductImage from "../../assets/images/ProductImage.svg";
import BooksImage from "../../assets/images/BooksImage.svg";
import SocialMediaImage from "../../assets/images/SocialMediaImage.svg";
import PackagingImage from "../../assets/images/PackagingImage.svg";
import PrintMediaImage from "../../assets/images/PrintMediaImage.svg";
import ServiceCard from "./ServiceCard";
import ProjectTypeCard from "./ProjectTypeCard";
import { FaLock } from "react-icons/fa6";
import rupeeBagIcon from "../../assets/images/rupee-bag-icon.svg";
import tickIcon from "../../assets/images/tic-icon.svg";
import ProjectStyleCard from "./ProjectStyleCard";
import { loadAuth2 } from "gapi-script";
import ApplicationCard from "./AppllicationCard";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import CreatorExperienceCard from "./CreatorExperienceCard";
import { CiCircleAlert } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import moment from "moment";
import ModalLayout from "../modals/ModalLayout";
import TermsServicesModal from "../modals/TermsServicesModal";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import ConsultationCard from "./ConsultationCard";
import CloseFormModal from "../modals/CloseFormModal";
import UploadingDocumentCard from "./UploadingDocumentCard";
import PreviousTalentCard from "./PreviousTalentCard";

const SERVICES_DATA = [
  {
    id: "1",
    name: "Illustration",
    image: IllustrationImg,
    isFastDelivery: true,
  },
  {
    id: "2",
    name: "Social Media",
    image: SocialMediaImg,
    isFastDelivery: true,
  },
  {
    id: "3",
    name: "Web UI UX",
    image: WebUIUXImg,
    isFastDelivery: true,
  },
  { id: "4", name: "Icon", image: IconImg, isFastDelivery: false },
  {
    id: "5",
    name: "Infographic",
    image: InfographicsImg,
    isFastDelivery: false,
  },
  {
    id: "6",
    name: "Landing Page",
    image: LandingPageImg,
    isFastDelivery: true,
  },
  {
    id: "7",
    name: "Brand Stationary",
    image: BrandStationaryImg,
    isFastDelivery: true,
  },
  { id: "8", name: "Logo Design", image: LogoDesignImg, isFastDelivery: false },
];
const PROJECT_TYPES_DATA = [
  {
    id: "1",
    name: "One Time Project",
    image: FaLock,
  },
  {
    id: "2",
    name: "Recurring Project",
    image: rupeeBagIcon,
  },
];

const PROJECT_STYLES_DATA = [
  {
    id: "1",
    name: "Anime",
    image: AnimeImg,
  },
  {
    id: "2",
    name: "Caricature",
    image: CaricatureImg,
  },
  {
    id: "3",
    name: "Cartoon",
    image: CartoonImage,
  },
  {
    id: "4",
    name: "Comics",
    image: ComicsImage,
  },
  {
    id: "5",
    name: "Commercial",
    image: CommercialImage,
  },
  {
    id: "6",
    name: "Concept Art",
    image: ConceptArtImage,
  },
  { id: "7", name: "Retro", image: RetroImage },
];

const CREATORS_DATA = [
  {
    id: "1",
    experience: "Fresher Creator",
    projectCount: "5+ Projects experience",
  },
  {
    id: "2",
    experience: "Beginner Creator",
    projectCount: "20+ Projects experience",
  },
  {
    id: "3",
    experience: "Experienced",
    projectCount: "40+ Projects experience",
  },
  {
    id: "4",
    experience: "Pro Creator",
    projectCount: "100+ Projects experience",
  },
];

const APPLICATIONS_DATA = [
  { id: "1", name: "Website", image: WebsiteImage },
  { id: "2", name: "Product", image: ProductImage },
  { id: "3", name: "Book", image: BooksImage },
  { id: "4", name: "Social Media", image: SocialMediaImage },
  { id: "5", name: "Packaging", image: PackagingImage },
  { id: "6", name: "Print Media", image: PrintMediaImage },
];

const CONSULTATIONS_DATA = [
  {
    name: "Virtual Design Consultation",
    duration: 60,
    description:
      "To help you understand how we can help your project, we offer a free, no-obligation design consultation. Simply complete the form below and one of our experienced designer Manager will contact you to discuss your needs, objectives and vision and, maybe, help you unblock a situation.",
  },
  {
    name: "Virtual Design Consultation",
    duration: 30,
    description:
      "To help you understand how we can help your project, we offer a free, no-obligation design consultation. Simply complete the form below and one of our experienced designer Manager will contact you to discuss your needs, objectives and vision and, maybe, help you unblock a situation.",
  },
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/msword",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const CreateProjectForm = ({
  steps,
  activeStep,
  setActiveStep,
  setAllValues,
}) => {
  const [progress, setProgress] = useState(0);
  const [serviceData, setServiceData] = useState(SERVICES_DATA);
  const [previousTalents, setPreviousTalents] = useState([]);
  const [designRequirementError, setDesignRequirementError] = useState("");
  const [referenceDocumentError, setReferenceDocumentError] = useState("");
  const [referenceLink, setReferenceLink] = useState("");
  const [referenceLinksError, setReferenceLinksError] = useState("");
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCloseFormModal, setOpenCloseFormModal] = useState(false);

  const navigate = useNavigate();

  {
    /**------------------ FORM VALIDATIONS ---------------------*/
  }
  const schema = yup.object().shape({
    selectedService: yup.string().required("Please select a service"),
    projectType: yup.string().required("Please select one"),
    projectStyle: yup.string().required("Please select one"),
    otherProjectStyle: yup
      .mixed()
      .optional("Upload a file when selecting 'Other'")
      .test(
        "fileSize",
        "File size must be maximum 25MB size.",
        (value) => !value || (value.size && value.size <= 25 * 1024 * 1024)
      ),
    projectApplication: yup.string().required("Please select one"),
    otherProjectApplication: yup
      .string()
      .optional()
      .matches(/^[a-zA-Z\s]+$/, "Only alphabets allowed.")
      .matches(/^[^\s]+(?:\s[^\s]+)*$/, "No trailing spaces allowed."),
    projectName: yup
      .string()
      .required("Project name is required.")
      .matches(/^[a-zA-Z\s]+$/, "Only alphabets allowed.")
      .matches(/^[^\s]+(?:\s[^\s]+)*$/, "No trailing spaces allowed.")
      .min(6, "Project name must be at least 6 characters."),
    designRequirement: yup.mixed(),
    projectKind: yup.string().required("Please select the kind of project."),
    referenceDocument: yup.mixed(),
    referenceLinks: yup
      .array()
      .of(yup.string().url("Each link must be a valid URL."))
      .max(5, "You can add a maximum of 5 links.")
      .test("unique", "Links must be unique.", (value) => {
        return new Set(value).size === value.length;
      }),
    projectDeadline: yup
      .date()
      .required("Please select a deadline.")
      .test(
        "minDate",
        "The deadline must be at least two days from today.",
        (value) => {
          if (!value) return false;

          const currentDate = moment();
          const twoDaysFromNow = currentDate.add(2, "days");

          return moment(value).isAfter(twoDaysFromNow, "day");
        }
      ),
    designerLevel: yup.string().required("Please select one designer."),
    budget: yup
      .number("Please enter a budget")
      .required("Please enter a budget."),
  });

  {
    /**--------------- useForm INSTANCE -------------- */
  }
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
    defaultValues: { referenceLinks: [], referenceLinksInput: "" },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  {
    /**-------------- FORMAL VALUES INSTANCE --------- */
  }
  const formValues = getValues();

  const handleDesignRequirementChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];

    files.forEach((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setDesignRequirementError(
          `Only .doc, .docx, or .pdf files are allowed.`
        );
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setDesignRequirementError(`File size must be a maximum of 5MB.`);
        return;
      }

      validFiles.push(file);
    });

    if (validFiles.length > 0) {
      setValue("designRequirement", validFiles);
    }
  };

  const handleReferenceDocumentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setReferenceDocumentError("Only PDF files are allowed.");
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setReferenceDocumentError("File size must be maximum 5MB.");
        return;
      }
      setValue("referenceDocument", file);
      setReferenceDocumentError("");
      setReferenceLinksError("");
    }
  };

  {
    /**--------- HANDLE PROCEED */
  }
  const handleProceed = async () => {
    let output;
    if (activeStep === 0) {
      output = await trigger(["selectedService"], {
        shouldFocus: true,
      });
    } else if (activeStep === 1) {
      output = await trigger(["projectType"], {
        shouldFocus: true,
      });
    } else if (activeStep === 2) {
      output = await trigger(["projectStyle"], {
        shouldFocus: true,
      });
    } else if (activeStep === 3) {
      output = await trigger(
        ["projectApplication", "otherProjectApplication"],
        {
          shouldFocus: true,
        }
      );
    } else if (activeStep === 4) {
      output = await trigger(
        [
          "projectName",
          "projectKind",
          "projectDeadline",
          "designRequirement",
          "referenceDocument",
          "referenceLinks",
        ],
        {
          shouldFocus: true,
        }
      );
    } else if (activeStep === 5) {
      output = await trigger(["designerLevel", "budget"], {
        shouldFocus: true,
      });
    }

    if (
      (watch("projectStyle") === "Other" && !watch("otherProjectStyle")) ||
      watch("otherProjectStyle")?.length <= 0
    ) {
      setError("otherProjectStyle", {
        type: "manual",
        message: "Upload a file when selecting 'Other'",
      });
      return;
    }

    if (
      watch("projectApplication") === "Other" &&
      !watch("otherProjectApplication")
    ) {
      setError("otherProjectApplication", {
        type: "manual",
        message: "Please specify other application.",
      });
      return;
    }

    if (activeStep === 4 && !watch("designRequirement")) {
      setDesignRequirementError("Please upload a document");
      return;
    }

    if (
      activeStep === 4 &&
      !watch("referenceDocument") &&
      (!watch("referenceLinks") || watch("referenceLinks")?.length <= 0)
    ) {
      setReferenceLinksError(
        "Please provide either reference document or link"
      );
      return;
    }

    if (!output) return;
    setAllValues({ ...formValues });
    setActiveStep((prevStep) => prevStep + 1);
    setProgress((prev) => prev + 14.25);
    setReferenceLinksError("");
  };

  const handleCloseForm = (e) => {
    e.preventDefault();
    setOpenCloseFormModal(true);
  };

  useEffect(() => {
    if (watch("projectStyle") !== "Other") {
      resetField("otherProjectStyle");
    }

    if (watch("projectApplication") !== "Other") {
      resetField("otherProjectApplication");
    }
  }, [watch("projectStyle"), watch("projectApplication")]);

  useEffect(() => {
    if (!watch("referenceDocument") || !watch("referenceLinks")) {
      setReferenceDocumentError("");
      setReferenceLinksError("");
    }
  }, [watch("referenceDocument"), watch("referenceLinks")]);

  const urlSchema = yup.string().url("Enter a valid URL.");

  const handleAddLink = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newLink = event.target.value.trim();
      const currentLinks = getValues("referenceLinks");

      if (!urlSchema.isValidSync(newLink)) {
        setReferenceLinksError("Invalid URL. Please enter a valid URL.");
        return;
      }
      if (currentLinks.includes(newLink)) {
        setReferenceLinksError("This link has already been added.");
        return;
      }

      if (newLink && currentLinks.length < 5) {
        setValue("referenceLinks", [newLink, ...currentLinks], {
          shouldValidate: true,
        });
        resetField("referenceLinksInput");
        setReferenceLinksError("");
        setReferenceLink("");
      } else {
        setReferenceLinksError("You can not add more than 5 links");
      }
    }
  };

  const handleRemoveLink = (index) => {
    const currentLinks = getValues("referenceLinks");
    const updatedLinks = currentLinks.filter((_, i) => i !== index);
    setValue("referenceLinks", updatedLinks);
  };

  const submitForm = (data) => {
    setOpenConfirmationModal(true);
  };

  const handleFinalSubmit = () => {
    console.log("All Values", formValues);
    navigate("/designs/finding-hyver");
    setTimeout(() => {
      navigate("/designs/hyver-found");
    }, 5000);
    setOpenConfirmationModal(false);
    setActiveStep(0);
    reset();
  };

  const handleFilter = (e) => {
    const searchTerm = e?.target?.value;
    setServiceData(
      SERVICES_DATA.filter((ele) => ele.name.includes(searchTerm))
    );
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    console.log("Draft Saved");
    reset();
    setAllValues(null);
    setActiveStep(0);
    setOpenCloseFormModal(false);
  };

  // console.log(watch("otherProjectStyle"));
  console.log(formValues?.designRequirement);

  const handleRemoveOtherStyle = (file) => {
    setValue(
      "otherProjectStyle",
      Array.from(formValues?.otherProjectStyle)?.filter(
        (ele) => ele?.name !== file?.name
      )
    );
  };

  // const handleRemoveDesignRequirement = (file) => {
  //   setValue(
  //     "designRequirement",
  //     formValues?.otherProjectStyle?.filter((ele) => ele?.name !== file?.name)
  //   );
  // };

  return (
    <form
      className="w-full h-full flex flex-col flex-1 border-l border-[#151515] bg-[#111111] py-6 pl-4 pr-10 relative"
      onSubmit={handleSubmit(submitForm)}
    >
      <header className="flex w-full justify-between items-center pb-3">
        <h3 className="text-2xl">{steps[activeStep]?.formName}</h3>
        <button
          className={`rounded-[15px] p-3 bg-[#0e0e0e] text-[#e1ff26] ${
            activeStep === 0 && "cursor-not-allowed"
          }`}
          onClick={handleCloseForm}
          disabled={activeStep === 0}
        >
          <IoMdClose size={20} />
        </button>
      </header>

      <section className="flex-1 w-full pt-4 overflow-y-scroll custom-scrollbar scrollbar-sm">
        {/**----------------- SELECT A SERVICE ------------------- */}
        {activeStep === 0 && (
          <div className="px-2 pb-4">
            <div className="w-[382px] relative mb-8 overflow-hidden flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
              <input
                type="text"
                placeholder="Search for a service(eg. brand design, UI/UX etc.)"
                className="w-full h-full bg-inherit pl-10 pr-4 py-4 text-[15px] placeholder:text-sm placeholder:text-inherit"
                onChange={handleFilter}
              />
              <IoSearchOutline size={20} className="absolute left-3" />
            </div>
            <p className="text-[15px] my-2 font-thin opacity-35">
              {serviceData?.length === 0 ? "No results found" : "Featured"}
            </p>
            {errors.selectedService && (
              <p className="text-red-500 text-sm">
                {errors?.selectedService?.message}
              </p>
            )}
            <div className="flex flex-wrap  gap-6">
              {serviceData?.map((service) => (
                <ServiceCard
                  service={service}
                  watch={watch}
                  register={register}
                  key={service.name}
                />
              ))}
            </div>
            {serviceData?.length === 0 && (
              <div>
                <p>
                  Not sure where to start with ? Get a Free consultation now.
                </p>
                <div className="flex gap-x-6 mt-7 mb-5">
                  {CONSULTATIONS_DATA.map((consultation, ind) => (
                    <ConsultationCard key={ind} consultation={consultation} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/**----------------- SELECT PROJECT TYPE ------------------- */}
        {activeStep === 1 && (
          <div>
            <div className="flex gap-x-4">
              {PROJECT_TYPES_DATA.map((projectType, ind) => (
                <ProjectTypeCard
                  projectType={projectType}
                  watch={watch}
                  register={register}
                  ind={ind}
                  key={projectType.name}
                />
              ))}
            </div>
            {errors.projectType && (
              <p className="text-red-500 text-sm">
                {errors?.projectType?.message}
              </p>
            )}
          </div>
        )}

        {/**----------------- SELECT PROJECT STYLE -------------------- */}
        {activeStep === 2 && (
          <div className="px-2 pb-5">
            <div className="flex flex-wrap  gap-y-4 gap-x-3.5">
              {PROJECT_STYLES_DATA.map((style) => (
                <ProjectStyleCard
                  style={style}
                  watch={watch}
                  register={register}
                  key={style.name}
                />
              ))}
            </div>
            {errors.projectStyle && (
              <p className="text-red-500 text-sm">
                {errors?.projectStyle?.message}
              </p>
            )}
            <p className="text-sm my-8">
              Not able to find what you’re looking for ? Try these options.
            </p>
            <div className={`flex gap-x-4 `}>
              <div className="flex items-center justify-between w-60 py-2 px-5 bg-[#000000B5] bg-opacity-70 rounded-lg f-HelveticaNeueRoman">
                <label
                  htmlFor="otherOption"
                  className="cursor-pointer text-[15px]"
                >
                  Other
                </label>
                <input
                  type="radio"
                  id="otherOption"
                  name="styleOption"
                  className="form-radio"
                  multiple
                  {...register("projectStyle")}
                  value={"Other"}
                />
              </div>

              <div className="w-[460px] pl-5 pr-1 flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-lg">
                <p className="py-3 rounded-lg f-HelveticaNeueRoman">
                  Upload your style
                </p>
                <input
                  type="file"
                  className="hidden"
                  disabled={watch("projectStyle") !== "Other"}
                  id="fileUpload"
                  accept="image/*"
                  multiple
                  {...register("otherProjectStyle")}
                />
                <label
                  htmlFor="fileUpload"
                  className={`w-32  h-10 py-2 bg-[#161616] rounded-lg text-center  f-HelveticaNeueRoman ${
                    watch("projectStyle") === "Other" && "cursor-pointer"
                  }`}
                >
                  Choose file
                </label>
              </div>
            </div>
            {errors.otherProjectStyle && !watch("otherProjectStyle") && (
              <p className="text-red-500 text-sm">
                Upload a file when selecting 'Other'.
              </p>
            )}
            {watch("otherProjectStyle") <= 0 && (
              <p className="text-red-500 text-sm">
                Please upload at least one style.
              </p>
            )}
            {watch("otherProjectStyle")?.length > 0 && (
              <div className="mb-4">
                <p className="text-sm my-4">Uploading</p>
                <div className="flex flex-col gap-y-3">
                  {Array.from(formValues?.otherProjectStyle)?.map((file) => (
                    <UploadingDocumentCard
                      file={file}
                      key={file?.name}
                      handleRemoveFile={() => handleRemoveOtherStyle(file)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/**------------------ SELECT PROJECT APPLICATION -----------------  */}
        {activeStep === 3 && (
          <div className="px-2">
            <div className="flex flex-wrap  gap-y-4 gap-x-3.5">
              {APPLICATIONS_DATA.map((application) => (
                <ApplicationCard
                  application={application}
                  watch={watch}
                  register={register}
                  key={application.name}
                />
              ))}
            </div>
            {errors.projectApplication && (
              <p className="text-red-500 text-sm">
                {errors?.projectApplication?.message}
              </p>
            )}
            <p className="text-sm my-8">
              Not able to find what you’re looking for ? Try these options.
            </p>
            <div
              className={`flex gap-x-4 ${
                (watch("otherProjectApplication") ||
                  !errors.otherProjectApplication) &&
                "mb-5"
              }`}
            >
              <div className="flex items-center justify-between w-60 py-2.5 px-5 bg-[#000000B5] bg-opacity-70 rounded-xl f-HelveticaNeueRoman">
                <label
                  htmlFor="otherOption"
                  className="cursor-pointer text-[15px]"
                >
                  Other
                </label>
                <input
                  type="radio"
                  id="otherOption"
                  name="applicationOption"
                  className="form-radio"
                  {...register("projectApplication")}
                  value={"Other"}
                />
              </div>

              <div className="w-[460px] overflow-hidden flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-xl">
                <input
                  type="text"
                  placeholder="Specify Others"
                  className="w-full h-full bg-inherit pl-4 text-[15px] placeholder:text-inherit"
                  {...register("otherProjectApplication")}
                  disabled={watch("projectApplication") !== "Other"}
                />
              </div>
            </div>
            {errors.otherProjectApplication &&
              !watch("otherProjectApplication") && (
                <p className="text-red-500 text-sm mb-5">
                  {errors?.otherProjectApplication?.message}
                </p>
              )}
          </div>
        )}

        {/**------------------ PROJECT BRIEF -------------------------------- */}
        {activeStep === 4 && (
          <div className="w-[382px] mb-3 flex flex-col gap-y-6">
            <div>
              <div className="w-full overflow-hidden flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
                <input
                  type="text"
                  placeholder="Name of Project"
                  className="w-full h-full bg-inherit pl-4 py-3 text-[15px] placeholder:text-inherit"
                  {...register("projectName")}
                />
              </div>
              {errors.projectName && (
                <p className="text-red-500 text-sm pl-4">
                  {errors?.projectName?.message}
                </p>
              )}
            </div>
            <div>
              <p className="text-[15px] mb-2 pl-4">
                Describe your design requirement in detail here
              </p>
              <label className=" pl-5 py-3 cursor-pointer flex  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleDesignRequirementChange}
                />
                Upload your file
                <span className="opacity-55 font-extralight">{`(5mb max)`}</span>
              </label>

              <p className="text-xs opacity-55 pl-4 font-thin">
                Accepted files: dox/pdf/doc
              </p>
              {designRequirementError && (
                <p className="text-red-500 pl-4 text-sm">
                  {designRequirementError}
                </p>
              )}
              {watch("designRequirement") && (
                <div className="mb-4">
                  <p className="text-sm my-5 mt-7">Uploading</p>
                  <div className="flex flex-col gap-y-3">
                    {Array.from(formValues?.designRequirement)?.map((file) => (
                      <UploadingDocumentCard
                        file={file}
                        key={file?.name}
                        // handleRemoveFile={() =>
                        //   handleRemoveDesignRequirement(file)
                        // }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full">
              <p className="text-[15px] mb-2 pl-4">
                What kind of a project is this ?
              </p>
              <div className="w-full relative inline-block overflow-hidden  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
                <select
                  {...register("projectKind")}
                  className="bg-inherit py-3 px-4 pr-10 rounded-2xl appearance-none w-full cursor-pointer"
                >
                  <option value="One-time project">One-time project</option>
                  <option value="Recurring project">Recurring project</option>
                </select>
                <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none ">
                  <RiArrowDownSLine size={20} className="text-[#e1ff26]" />
                </span>
              </div>
              {errors?.projectKind && (
                <p className="text-red-500 text-sm">
                  {errors?.projectKind?.message}
                </p>
              )}
            </div>
            <div>
              <p className="text-[15px] mb-2 pl-4">Add References/web links</p>
              <div className="w-full pl-5 pr-1 flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
                <p className="py-3 rounded-lg f-HelveticaNeueRoman">
                  Add References
                </p>
                <input
                  type="file"
                  className="hidden"
                  id="referenceFileUpload"
                  onChange={handleReferenceDocumentChange}
                />
                <label
                  htmlFor="referenceFileUpload"
                  className={`w-32 text-[15px] text-[#e1ff26] font-thin cursor-pointer py-2 bg-[#161616] rounded-xl text-center  f-HelveticaNeueRoman `}
                >
                  Choose file
                </label>
              </div>
              {referenceDocumentError && (
                <p className="text-red-500 text-sm">{referenceDocumentError}</p>
              )}
              <div className="w-full mt-2 overflow-hidden flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl">
                <Controller
                  name="referenceLinksInput"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Input URL & press enter"
                      className="w-full h-full bg-inherit pl-4 py-3 text-[15px] placeholder:text-inherit"
                      onKeyDown={handleAddLink}
                    />
                  )}
                />
              </div>
              {(errors.referenceLinks || referenceLinksError) && (
                <p className="text-red-500 text-sm pl-4">
                  {errors?.referenceLinks?.message || referenceLinksError}
                </p>
              )}
              {watch("referenceLinks") && (
                <div className="flex w-[150%] flex-wrap gap-2 mt-5">
                  {watch("referenceLinks")?.map((link, ind) => (
                    <div
                      key={ind}
                      className="w-fit flex gap-x-3 items-center bg-[#171818] px-4 py-2 rounded-[10px]"
                    >
                      <p className="text-[10px]">{link}</p>
                      <div className="h-[19px] w-[19px] flex justify-center cursor-pointer items-center rounded-full bg-[#00000033]">
                        <IoMdClose
                          size={12}
                          className="text-[#e1ff26]"
                          onClick={() => handleRemoveLink(ind)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-[15px] mb-2 pl-4">Add a project deadline</p>
              <label className="w-full relative flex items-center text-[15px] bg-[#000000B5] bg-opacity-70 rounded-2xl overflow-hidden cursor-pointer">
                <input
                  type="date"
                  className="w-full h-full bg-inherit pl-4 pr-12 py-3 text-[15px] placeholder:text-inherit"
                  {...register("projectDeadline")}
                  id="projectDeadline"
                />
                <CiCalendar
                  size={20}
                  className="absolute right-4 text-[#e1ff26]"
                />
              </label>

              {errors.projectDeadline && (
                <p className="text-red-500 text-sm ">
                  {errors?.projectDeadline?.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/**------------------ SELECT A CREATOR & BUDGET ----------------+---- */}
        {activeStep === 5 && (
          <div className="w-full">
            <div className="w-fit grid grid-cols-2 gap-4 m">
              {CREATORS_DATA.map((creator, ind) => (
                <CreatorExperienceCard
                  creator={creator}
                  register={register}
                  watch={watch}
                  ind={ind}
                  key={ind}
                />
              ))}
            </div>
            {errors.designerLevel && (
              <p className="text-red-500 text-sm">
                {errors?.designerLevel?.message}
              </p>
            )}
            <div>
              <h3 className="text-2xl my-4 mt-6">Please select a budget </h3>
              <p className="opacity-55 font-thin mb-6">
                Note: an ideal budget for a fresher creator would be ₹ 6000
              </p>
            </div>
            <div
              className={`w-80 overflow-hidden relative flex items-center justify-between  text-[15px]  bg-[#000000B5] bg-opacity-70 rounded-2xl ${
                errors?.budget && "border border-red-500"
              }`}
            >
              <input
                type="text"
                placeholder="Budget"
                className={`w-full h-full bg-inherit pl-9 pr-36 py-4 text-[15px] placeholder:text-inherit ri`}
                {...register("budget")}
              />
              <BsCurrencyRupee className="absolute left-4" />
              {watch("budget") && !errors?.budget && (
                <h5 className="text-xl absolute right-4  bg-gradient-to-r from-[#FF8E8E] via-[#7D22FF] to-[#7D22FF] bg-clip-text text-transparent">
                  Looks Good !
                </h5>
              )}
            </div>
            {errors.budget && (
              <p className="text-red-500 text-sm">{errors?.budget?.message}</p>
            )}
            <div className="flex gap-x-2 items-center mt-3">
              <div className="h-[19px] w-[19px] flex justify-center items-center rounded-full bg-[#050505]">
                <img src={tickIcon} alt="tick" />
              </div>
              <p className="opacity-55 text-[15px] relative">
                Use coins from wallet and kickoff the project instantly.
              </p>
              <CiCircleAlert className="cursor-pointer" />
            </div>
            {previousTalents?.length > 0 && (
              <div className="my-5">
                <h1 className="text-2xl">Hire previous Talent</h1>
                <div className="flex items-center gap-x-4">
                  {Array(2)
                    .fill(0)
                    .map((ele, ind) => (
                      <PreviousTalentCard
                        key={ind}
                        isAvailable={ind === 0 && true}
                        name={ind !== 0 && "Pablo Picasso"}
                      />
                    ))}{" "}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/**--------------------- FOOTER (PROCEED & SAVE DRAFT) ------------------------ */}
      <footer
        className="sticky bottom-0"
        style={{
          background:
            "linear-gradient(180deg, #111111 0%, #111111 50%, #111111 100%)",
        }}
      >
        <div className="w-full flex justify-between items-center bg-[#050505] p-3 rounded-2xl">
          <div className="flex items-center gap-x-2">
            <p className="text-[15px]">Project brief completion</p>
            <div className="w-[350px] h-1 bg-[#9D9D9D42]/30 mx-4 relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 h-full rounded-md transition-width duration-500 ease-in-out"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #E1FF26 0%, #2D2D2D 100%)",
                }}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className={`bg-[#161616] text-[#FCFCD8] px-4 py-2 rounded-lg ${
                activeStep === 0 && "cursor-not-allowed"
              }`}
              onClick={handleSaveDraft}
              disabled={activeStep === 0}
            >
              Save Draft
            </button>
            {activeStep <= 4 && (
              <button
                type="button"
                onClick={handleProceed}
                className={`bg-[#161616] text-[#E1FF26] px-4 py-2 rounded-lg ${
                  serviceData?.length === 0 && "cursor-not-allowed"
                }`}
                disabled={serviceData?.length === 0}
              >
                Proceed
              </button>
            )}
            {activeStep === 5 && (
              <button
                type="submit"
                className="bg-[#161616] text-[#E1FF26] px-4 py-2 rounded-lg"
              >
                Proceed
              </button>
            )}
          </div>
        </div>
      </footer>
      <TermsServicesModal
        open={openConfirmationModal}
        onClose={() => setOpenConfirmationModal(false)}
        handleFinalSubmit={handleFinalSubmit}
      />
      <CloseFormModal
        open={openCloseFormModal}
        onClose={() => setOpenCloseFormModal(false)}
        setActiveStep={setActiveStep}
        reset={reset}
        setAllValues={setAllValues}
        handleSaveDraft={handleSaveDraft}
      />
    </form>
  );
};

export default CreateProjectForm;
