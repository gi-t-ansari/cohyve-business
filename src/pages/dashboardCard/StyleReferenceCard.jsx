import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

import AnimeImg from '../../assets/images/AnimeImage.svg';
import CaricatureImg from '../../assets/images/CaricatureImage.svg';
import CartoonImage from '../../assets/images/CartoonImage.svg';
import ComicsImage from '../../assets/images/ComicsImage.svg';
import CommercialImage from '../../assets/images/CommercialImage.svg';
import ConceptArtImage from '../../assets/images/ConceptArtImage.svg';
import FantasyImage from '../../assets/images/FantasyImage.svg';
import RetroImage from '../../assets/images/RetroImage.svg';

// Options for the gallery
const imageOptions = [
  { id: 1, name: "Anime", imgSrc: AnimeImg },
  { id: 2, name: "Caricature", imgSrc: CaricatureImg },
  { id: 3, name: "Cartoon", imgSrc: CartoonImage },
  { id: 4, name: "Comics", imgSrc: ComicsImage },
  { id: 5, name: "Commercial", imgSrc: CommercialImage },
  { id: 6, name: "Concept Art", imgSrc: ConceptArtImage },
  { id: 7, name: "Fantasy", imgSrc: FantasyImage },
  { id: 8, name: "Retro", imgSrc: RetroImage }
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
