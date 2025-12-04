import React, { useState } from "react";
import Slide from "./Slide";
import { travelData } from "../data/travelData";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? travelData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === travelData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      <Slide
        title={travelData[activeIndex].title}
        description={travelData[activeIndex].description}
        image={travelData[activeIndex].image}
      />

      <div className="buttons">
        <button onClick={prevSlide} className="btn">
          ◀ Prev
        </button>
        <button onClick={nextSlide} className="btn">
          Next ▶
        </button>
      </div>

      
    </div>
  );
};

export default Slider;
