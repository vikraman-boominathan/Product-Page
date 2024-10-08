import React, { useState } from "react";

export default function Navbar({ count, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar  min-h-32 flex justify-between">
      <div>
        <div className="flex">
          <a className="btn btn-ghost text-black  text-xl">
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                fill="#1D2026"
                fill-rule="nonzero"
              />
            </svg>
          </a>
        </div>
        <div className=" sm:hidden w-full pl-10 md:flex  justify-center items-center gap-8">
          <div>
            <a className="inline-flex cursor-pointer items-center font-extralight min-h-32 border-b-2 border-transparent px-1 pt-1 text-sm text-gray-500 hover:border-orange-300 hover:text-black">
              Collections
            </a>
          </div>

          <div>
            <a className="inline-flex cursor-pointer items-center font-extralight min-h-32 border-b-2 border-transparent px-1 pt-1 text-sm text-gray-500 hover:border-orange-300 hover:text-black">
              Men
            </a>
          </div>
          <div>
            <a className="inline-flex cursor-pointer items-center font-extralight min-h-32 border-b-2 border-transparent px-1 pt-1 text-sm text-gray-500 hover:border-orange-300 hover:text-black">
              Women
            </a>
          </div>
          <div>
            <a className="inline-flex cursor-pointer items-center font-extralight min-h-32 border-b-2 border-transparent px-1 pt-1 text-sm text-gray-500 hover:border-orange-300 hover:text-black">
              About
            </a>
          </div>
          <div>
            <a className="inline-flex cursor-pointer items-center font-extralight min-h-32 border-b-2 border-transparent px-1 pt-1 text-sm text-gray-500 hover:border-orange-300 hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex-none gap-6">
        <div className="dropdown dropdown-end relative ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div onClick={togglePopup} className="indicator  cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                className={`${
                  count ? "block" : "hidden"
                } badge badge-sm indicator-item text-white bg-orange-400`}
              >
                {count}
              </span>
            </div>
          </div>
          {isOpen && (
            <div className="card card-compact absolute -left-44 bg-white z-[1] mt-3 w-96 shadow-2xl  min-h-48">
              <div className="card-body ">
                <div className="text-lg font-bold text-black">Cart</div>
                {count === 0 ? (
                  <div className="flex h-24 font-semibold text-black justify-center items-center">
                    Your cart is empty
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14">
                        <img
                          src="/images/image-product-1.jpg"
                          className="w-full h-full rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-lg text-gray-400">
                          Fall Limited Edition Sneakers
                        </div>
                        <div className="text-lg text-gray-400">
                          $125.00 x {count}
                          <span className="text-lg font-bold text-black">
                            $ {count * 125}.00
                          </span>
                        </div>
                      </div>
                      <div onClick={removeFromCart} className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="gray"
                        >
                          <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button
                        onClick={removeFromCart}
                        className="btn bg-orange-400 btn-block"
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 cursor-pointer rounded-full hover:ring-1 hover:ring-orange-400">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
