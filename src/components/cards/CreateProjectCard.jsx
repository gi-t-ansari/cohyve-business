import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import skeleton1 from "../../assets/images/create-project-skeleton-1.png";
import skeleton2 from "../../assets/images/create-project-skeleton-2.png";
import skeleton3 from "../../assets/images/create-project-skeleton-3.png";

const CreateProjectCard = () => {
  return (
    <div className="basis-[32%] h-full bg-[#050505] rounded-[30px] cursor-pointer">
      <header className="h-[65%] w-full relative overflow-hidden">
        <img src={skeleton1} alt="skeleton" className="absolute top-4 left-2" />
        <img
          src={skeleton2}
          alt="skeleton"
          className="absolute top-4 -right-16"
        />
        <img
          src={skeleton2}
          alt="skeleton"
          className="absolute top-16 -right-4"
        />
        <img
          src={skeleton3}
          alt="skeleton"
          className="absolute bottom-0 -left-4"
        />
      </header>
      <footer className="w-full h-[35%] flex flex-col items-center justify-center">
        <CiSquarePlus className="text-[#e1ff26]" size={26} />
        <span className="text-lg">Create a project</span>
      </footer>
    </div>
  );
};

export default CreateProjectCard;
