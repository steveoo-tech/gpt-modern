import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 stands for Generative Pre-trained Transformer 3. It is an advanced artificial intelligence language model developed by OpenAI, capable of generating human-like text. GPT-3 is a machine learning model that has been trained on a massive dataset of texts, including books, articles, and web pages. This training has enabled it to learn the patterns and structure of human language, allowing it to generate text that is often difficult to distinguish from text written by a human."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="GPT-3 can understand and respond to user queries and provide helpful information, making it a useful tool for customer support and other automated communication processes."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-3 can also be used to generate content for knowledge bases, which are databases of information that can be used to answer common questions and provide support to users. "
        />
        <Feature
          title="Education"
          text="GPT-3 has the potential to revolutionize education by providing personalized learning experiences and assisting with content creation."
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
