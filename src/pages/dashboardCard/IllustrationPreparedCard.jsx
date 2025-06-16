import React, { useState } from 'react';


// Import card images
import WebsiteImage from '../../assets/images/WebsiteImage.svg';
import ProductImage from '../../assets/images/ProductImage.svg';
import BooksImage from '../../assets/images/BooksImage.svg';
import SocialMediaImage from '../../assets/images/SocialMediaImage.svg';
import PackagingImage from '../../assets/images/PackagingImage.svg';
import PrintMediaImage from '../../assets/images/PrintMediaImage.svg';

const imageOptions = [
  { id: 1, name: "WebsiteImage", imgSrc: WebsiteImage },
  { id: 2, name: "ProductImage", imgSrc: ProductImage },
  { id: 3, name: "SocialMediaImage", imgSrc: SocialMediaImage },
  { id: 4, name: "PackagingImage", imgSrc: PackagingImage },
  { id: 5, name: "PrintMediaImage", imgSrc: PrintMediaImage },
  { id: 6, name: "BooksImage", imgSrc: BooksImage },
];

const ImageOption = ({ imgSrc, name, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(name)} // Handle selection when clicked
    className={`relative bg-[#292929] rounded-lg overflow-hidden cursor-pointer border-2 
      ${isSelected ? 'border-[#E1FF26]' : 'border-transparent'}`} // Highlight selected card
  >
    <img src={imgSrc} alt={name} className="w-full h-44 object-cover" />
    <div className="absolute inset-0 flex mt-36 rounded-lg bg-black bg-opacity-25">
      <h3 className="text-center text-[#FCFCD8] f-HelveticaNeueRoman w-full">{name}</h3>
    </div>
    {isSelected && <span className="absolute top-3 left-3 text-[#E1FF26]">✔</span>} {/* Show checkmark if selected */}
  </div>
);

const ImageGalleryIllustration = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Track selected card


  const handleSelect = (name) => {
    setSelectedOption(name);
    console.log('Selected:', name); // Log selected option to console
    setTimeout(() => {
    }, 500); // Delay for smoother transition
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {imageOptions.map((option) => (
        <ImageOption
          key={option.id}
          imgSrc={option.imgSrc}
          name={option.name}
          isSelected={selectedOption === option.name} // Check if card is selected
          onSelect={handleSelect} // Handle selection
        />
      ))}
    </div>
  );
};

export default ImageGalleryIllustration;
