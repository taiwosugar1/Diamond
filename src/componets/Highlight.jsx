// Highlight.js
import React from "react";

const Highlight = ({ highlights }) => {
  return (
    <div>
      <h3>Highlights</h3>
      <ul>
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default Highlight;
