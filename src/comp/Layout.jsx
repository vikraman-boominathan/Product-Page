import ImageCarousal from "./ImageCarousal.jsx";
import Navbar from "./Navbar.jsx";
import ProductInfo from "./ProductInfo.jsx";

export default function Layout() {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="mx-auto max-w-7xl flex flex-col h-screen">
          <Navbar />
          <div className="flex justify-center mx-auto max-w-6xl space-y-20">
            <ImageCarousal />

            <ProductInfo />
          </div>
        </div>
      </div>
    </>
  );
}
