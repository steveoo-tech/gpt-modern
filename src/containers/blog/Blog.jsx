import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

/*Blog done and fully responsive*/

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Feb 14, 2023"
            title="Overview of GPT-3: OpenAI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Jan 26, 2023"
            title="GPT-3 in Business: OpenAI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Jan 18, 2023"
            title="GPT-3 in Education: OpenAI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Jan 12, 2023"
            title="GPT-3 in Job Replacement: and OpenAI is the future"
          />
          <Article
            imgUrl={blog05}
            date="Jan 10, 2023"
            title="Ethics and Limitations of GPT-3: Open  AI is the future."
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
