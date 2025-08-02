import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Loader from './components/Loader';
import GridComponent from "./Components/GridComponent"

import "./Components/Styles/GridComponent.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const gridRef = useRef(null);

  const handleScrollToGrid = () => {
    gridRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  var Element1 = {
    "SectionName":"Chairs & Sofa",
    "BigImageUrlList":["/assets/images/sofa3.webp","/assets/images/sofa2.webp"],
    "SmallImageUrlList":["/assets/images/Chair6.webp","/assets/images/sofa2.webp","/assets/images/Chair2.webp"]
}

var Element2 = {
    "SectionName":"Tables",
    "BigImageUrlList":["/assets/images/sofa6.webp","/assets/images/sofa4.webp","/assets/images/sofa5.webp"],
    "SmallImageUrlList":["/assets/images/Chair2.webp","/assets/images/sofa1.webp","/assets/images/Chair3.webp"]
}

var GridElements = [Element1, Element2]

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <main className="bg-[#111621] min-h-screen text-[#F1F0DB]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <h1 className="text-8xl font-bold">Rétrovie</h1>
          <p className="text-xl mt-4 text-center max-w-2xl">
            Discover timeless furniture pieces that bring elegance and character to your home. Our curated collection blends classic design with modern craftsmanship.
          </p>
          <button onClick={handleScrollToGrid} className="cursor-pointer mt-8 px-8 py-3 bg-[#F1F0DB] hover:bg-white/80  text-[#111621] font-semibold rounded-full hover:bg-opacity-80 transition-colors">
            Explore Our Collection
          </button>
        </div>
        <div ref={gridRef}>
          <GridComponent GridName={"Featured"} Description={"Step into a world of curated elegance. Our featured collection showcases handcrafted furniture that blends timeless design with unparalleled comfort, perfect for creating a home you'll love."} GridElements={GridElements}/>
        </div>
      </main>
    </>
  );
}

export default App;
