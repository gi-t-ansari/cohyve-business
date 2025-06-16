import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IllustrationImg from "../../assets/images/illustration.svg";
import SocialMediaImg from "../../assets/images/SocialMedia.svg";
import WebUIUXImg from "../../assets/images/WebUIUX.svg";
import IconImg from "../../assets/images/Icon.svg";
import InfographicsImg from "../../assets/images/inforgraphics.svg";
import LandingPageImg from "../../assets/images/landingPage.svg";
import BrandStationaryImg from "../../assets/images/BrandStationary.svg";
import LogoDesignImg from "../../assets/images/Logo.svg";

// Add fastDelivery flag to imageOptions if needed
const imageOptions = [
  { id: 1, name: "Illustration", imgSrc: IllustrationImg  },
  { id: 2, name: "SocialMedia", imgSrc: SocialMediaImg  },
  { id: 3, name: "Web UI UX", imgSrc: WebUIUXImg},
  { id: 4, name: "Icons", imgSrc: IconImg },
  { id: 5, name: "Infographics", imgSrc: InfographicsImg },
  { id: 6, name: "LandingPage", imgSrc: LandingPageImg  },
  { id: 7, name: "BrandStationary", imgSrc: BrandStationaryImg  },
  { id: 8, name: "LogoDesign", imgSrc: LogoDesignImg  }
];

const ImageOption = ({ imgSrc, name, selected, onClick }) => (
  <div
    className={`relative bg-[#292929] rounded-lg overflow-hidden cursor-pointer ${selected ? "border-2 border-[#E1FF26]" : ""}`}
    onClick={onClick}
  >
    <img src={imgSrc} alt={name} className="w-full h-40 object-cover" />
    <div className="absolute inset-0 flex mt-36 rounded-lg bg-black bg-opacity-25">
      <h3 className="text-center text-[#FCFCD8] f-HelveticaNeueRoman w-full">{name}</h3>
    </div>
    {/* Radio Button Icon for Selection */}
    {selected && (
      <span className="absolute top-2 right-2 text-[#E1FF26]">✔</span>
    )}
  </div>
);

const ImageGallery = () => {
  const [selectedOption, setSelectedOption] = useState(null); // State to hold selected option
  const navigate = useNavigate(); // Hook from react-router for navigation

  const handleSelect = (option) => {
    setSelectedOption(option);  // Set selected option
    console.log("Selected:", option); // Log selected option to the console
    // setTimeout(() => navigate('/illustration-prepared'), 1000); // Redirect to the next page after selection
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {imageOptions.map((option) => (
        <ImageOption
          key={option.id}
          imgSrc={option.imgSrc}
          name={option.name}
          selected={selectedOption === option.id} // Mark selected
          onClick={() => handleSelect(option.id)} // Handle click to select option
        />
      ))}
    </div>
  );
};

export default ImageGallery;
