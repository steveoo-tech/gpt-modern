import React from "react";
import { Feature } from "../../components";
import "./features.css";

/*Features done and fully responsive*/

const featuresData = [
  {
    title: "Improving quality of life instantly",
    text: "AI assists in every area of our lives, whether we're trying to read our emails, get driving directions, get music or movie recommendations.",
  },
  {
    title: "Become the center of business",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message bots of the furture",
    text: "Use message bots to powerdrive your productivity and get the job done properly the first time",
  },
  {
    title: "New technology awaits",
    text: "Chat GPT-3 is going to revolutionize the way we do things in modern society. The true power comes witht next iteration",
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
