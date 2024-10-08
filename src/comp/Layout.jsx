import ImageSection from "./ImageSection.jsx";
import Navbar from "./Navbar.jsx";
import ProductInfo from "./ProductInfo.jsx";
import { useState } from "react";

export default function Layout() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    setCount(1);
  };

  const removeFromCart = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container mx-auto h-screen w-screen">
        <div className="md:mx-auto md:max-w-7xl flex flex-col h-screen">
          <Navbar count={count} removeFromCart={removeFromCart} />
          <div className="flex flex-col sm:flex-row justify-center w-full md:mx-auto md:max-w-6xl space-y-10 md:space-y-20">
            <div className="flex-grow">
              <ImageSection />
            </div>
            <div>
              <ProductInfo
                count={count}
                increment={increment}
                decrement={decrement}
                addToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
