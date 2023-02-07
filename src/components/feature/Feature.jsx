import React from "react";
import "./feature.css";

// passing title and text as props
function Feature({ title, text }) {
  return (
    <div className="gpt3__features-container-feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
        <div className="gpt3__features-container_feature-text">{text}</div>
      </div>
    </div>
  );
}

export default Feature;
