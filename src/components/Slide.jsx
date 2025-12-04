import React, { useState } from "react";

const Slide = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);
  const shortText = description.substring(0, 100);

  return (
    <div className="slide">
      <img src={image} alt={title} className="slide-img" />

      <h2 className="slide-title">{title}</h2>
      <p className="slide-desc">
        {expanded ? description : shortText}
        <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "...Show more"}
      </button>
      </p> 
    </div>
  );
};

export default Slide;
