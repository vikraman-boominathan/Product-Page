import { useState } from "react";
import ImageModal from "./ImageModal.jsx";

export default function ImageCarousel() {
  const [currentImg, setCurrentImg] = useState("/images/image-product-1.jpg");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  

  

  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  

  const handleClick = (index) => {
    setCurrentImg(images[index]);
    setActiveIndex(index);
    setIsOpen(true);
    
  };

 

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="h-128 space-x-16">
        <img
          src={currentImg}
          alt="Main Image"
          className="h-full w-full object-cover cursor-pointer rounded-xl"
          onClick={() => handleClick(activeIndex)}
        />
      </div>
      <div className="flex mt-10 mb-10 justify-between space-x-20">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            onClick={() => handleClick(index)}
            src={imgSrc}
            alt={`image-${index + 1}`}
            className={`h-20 w-20 object-cover rounded-xl hover:opacity-75 ${
              activeIndex === index
                ? "ring-2 ring-orange-500"
                : "hover:ring-2 hover:ring-orange-500"
            }`}
          />
        ))}
      </div>
        <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
     
     
    </div>
  );
}
