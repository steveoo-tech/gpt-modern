import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

/*Header done and fully responsive*/

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Our team of experts is ready to unleash the power of cutting-edge
          natural language processing to transform your ideas into reality. With
          GPT-3's ability to generate human-like text, the possibilities are
          endless. From chatbots to content creation, let us help you take your
          business to the next level with the power of GPT-3.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
