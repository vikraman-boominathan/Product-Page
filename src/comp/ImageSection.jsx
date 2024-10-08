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

  const nextImage = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    setActiveIndex(nextIndex);
    setCurrentImg(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(prevIndex);
    setCurrentImg(images[prevIndex]);
  };

  return (
    <div className="w-full relative h-full flex flex-col justify-center items-center">
      <div
        onClick={prevImage}
        className="flex md:hidden bg-white h-10 w-10 rounded-full absolute  left-8 top-1/2 transform -translate-x-1/2 -translate-y-1/2  justify-center items-center cursor-pointer z-10"
      >
        <svg
          width="18"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          stroke="#000000"
          strokeWidth="42"
        >
          <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <div
        onClick={nextImage}
        className="bg-white md:hidden h-10 w-10 rounded-full absolute  right-2 top-1/2 transform  -translate-y-1/2 flex justify-center items-center cursor-pointer z-10"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="h-128 space-x-16">
        <img
          src={currentImg}
          alt="Main Image"
          className="h-full w-full object-cover cursor-pointer md:rounded-xl"
          onClick={() => handleClick(activeIndex)}
        />
      </div>
      <div className="hidden md:flex mt-10 mb-10 justify-between space-x-20">
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
