import Navbar from "./Navbar.jsx";
import ProductInfo from "./ProductInfo.jsx";

export default function Layout() {
  return (
    <>
      <div className="h-screen bg-white ">
        <div className=" mx-auto max-w-7xl h-screen">
          <Navbar />
          <div className=" mx-auto max-w-6xl space-y-10">
            <ProductInfo />
          </div>
        </div>
      </div>
    </>
  );
}
