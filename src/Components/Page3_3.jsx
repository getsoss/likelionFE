import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import "../CSS/Page3.css";

function Page3() {
  return (
    <div>
      <Header></Header>
      <Link to="/Page2">
        <div className="backText">
          <img
            src="./images/arrowLeft.png"
            alt="arrowLeft"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <h4>Back to Studies</h4>
        </div>
      </Link>
      <div className="textContainer">
        <div className="textBox">
          <div className="textBoxArea">
            <h1>Slack</h1>
            <h2>Design, San Francisco</h2>
            <img
              src="./images/line.png"
              alt="line"
              style={{
                width: "880px",
                height: "2px",
              }}
            />
            <h3>Description:</h3>
            <p>
              Plum Web Studio is looking for a Senior Motion Designer to join
              our team and focus on crafting sophisticated animations for
              consumer-facing performance marketing campaigns. Ideally, you have
              an incredible eye for detail and mastery of Cinema 4D, After
              Effects, and Adobe CS. Involvement is critical in all phases of
              the design process, including concept development, storyboarding,
              animation, graphic design, and production. Creatives will span a
              variety of mediums and types, including animated ads, social
              videos, product demos, & digital signage. You will act as both a
              hands-on producer and a strategic, conceptual leader on each
              project. You are a curious person and a strategic thinker, quickly
              understanding the company’s business concerns as well as
              identifying potential creative opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Page3;
