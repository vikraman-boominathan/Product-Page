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
      <div className="container mx-auto h-screen">
        <div className="mx-auto max-w-7xl flex flex-col h-screen">
          <Navbar count={count} removeFromCart={removeFromCart}/>
          <div className="flex justify-center mx-auto max-w-6xl space-y-20">
            <ImageSection />

            <ProductInfo count={count} increment={increment} decrement={decrement} addToCart={addToCart}/>
          </div>
        </div>
      </div>
    </>
  );
}
