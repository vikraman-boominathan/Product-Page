import { useState } from "react";

export default function ImageModal({isOpen, setIsOpen}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState("/images/image-product-1.jpg");
  

  const images2 = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const closePopup = () => {
    setIsOpen(false);
  };

  

  const nextImage = () => {
    const nextIndex = (activeIndex + 1) % images2.length;
    setActiveIndex(nextIndex);
    setCurrentImg(images2[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (activeIndex - 1 + images2.length) % images2.length;
    setActiveIndex(prevIndex);
    setCurrentImg(images2[prevIndex]);
  };

  return (
    <>
      {isOpen && (
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-85 z-50 fixed inset-0">
          <div className=" relative w-96 h-96 bg-white rounded-lg  shadow-lg">
            <div
              className="bg-white h-10 w-10 rounded-full absolute  left-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer z-10"
              onClick={prevImage}
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

            <img
              src={currentImg}
              alt="Popup Image"
              className="h-full w-full object-cover rounded-lg "
            />

            <div onClick={nextImage} className="bg-white h-10 w-10 rounded-full absolute  -right-5 top-1/2 transform  -translate-y-1/2 flex justify-center items-center cursor-pointer z-10">
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            <button
              className="absolute -top-12 -right-1 text-3xl text-white rounded-full p-2"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
          <div className="flex mt-10 mb-10 justify-between space-x-8">
            {images2.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`image-${index + 1}`}
                className={`h-16 bg-white w-18 object-cover rounded-xl cursor-pointer transition-all ${
                  activeIndex === index
                    ? "bg-white opacity-75 ring-2 ring-orange-500" // Active state
                    : "hover:bg-gray-200 hover:ring-2 hover:ring-orange-500" // Inactive hover state
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
