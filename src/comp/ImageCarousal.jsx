import { useState } from "react";

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

  const closePopup = () => {
    setIsOpen(false); 
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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="h-128 space-x-16">
        <img
          src={currentImg}
          alt="Main Image"
          className="h-full w-full object-cover rounded-xl"
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
              activeIndex === index ? "ring-2 ring-orange-500" : "hover:ring-2 hover:ring-orange-500"
            }`}
          />
        ))}
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative w-96 h-96 bg-white rounded-lg overflow-hidden">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
              onClick={prevImage}
            >
              &lt;
            </button>
            <img
              src={currentImg}
              alt="Popup Image"
              className="h-full w-full object-cover"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
              onClick={nextImage}
            >
              &gt;
            </button>
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
