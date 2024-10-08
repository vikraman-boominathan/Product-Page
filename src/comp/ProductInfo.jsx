

export default function ProductInfo({ count, increment, decrement, addToCart }) {
  

  return (
    <div className=" flex flex-col space-x-24">
      <div className="font-kumbh ml-24 cursor-pointer font-regular text-black tracking-widest">
        Sneaker Company
      </div>
      <h2 className="font-kumbh font-bold text-black text-5xl pt-5">
        Fall Limited Edition Sneakers
      </h2>

      <p className="font-kumbh font-regular text-black w-[70%] pt-10">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className=" mt-5">
        <div className="font-kumbh font-bold text-black text-2xl">
          $125.00{" "}
          <span className="bg-black font-semibold text-sm text-center py-1 ml-2 text-white px-2 rounded-md">
            50%
          </span>
        </div>
        <div className="font-kumbh  text-gray-500 mt-2 text-sm font-semibold">
          $250.00
        </div>
      </div>
      <div className=" flex gap-4">
        <div className="w-[35%] flex justify-between items-center rounded-md  mt-5 bg-gray-200 px-3 py-1">
          <span className="font-bold text-2xl text-orange-400 cursor-pointer" onClick={decrement}>-</span>
          <span className="font-bold text-xl text-black">{count}</span>
          <span className="font-bold text-2xl text-orange-400 cursor-pointer" onClick={increment}>+</span>
        </div>
        <div >
          <button onClick={addToCart} className="flex justify-center items-center  py-3 px-12 bg-orange-400 rounded-md mt-5">
            <span>
              <svg width="22" fill="black" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="black"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
            <span className="text-black font-bold text-sm">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
