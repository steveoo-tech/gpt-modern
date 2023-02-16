import React from "react";
import "./possibility.css";

import possibilityImage from "../../assets/possibility.png";

/*Possibility done and fully responsive*/

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          GPT-3 has been used to create articles, poetry, stories, news reports
          and dialogue using a small amount of input text that can be used to
          produce large amounts of copy. GPT-3 can create anything with a text
          structure -- not just human language text.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
