import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../CSS/Page2.css";

function Page2() {
  return (
    <div>
      <Header></Header>
      <div className="welcomeContainer">
        <div className="welcomeContents">
          <div className="welcomeBox1">
            <div className="welcomeText">
              <h1>Welcome to our LikeLion FrontEnd Session</h1>
              <p>
                Today we spoke with Alpamys Moldashev, the founder of the
                Rockfiller studio. Here he will tell you how to use hashtags!
              </p>
              <div className="welcomeBottom">
                <h4>Read story</h4>
                <img
                  src="./images/arrow.png"
                  alt="arrow"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </div>
            </div>
            <div className="welcomeImage">
              <img
                src="./images/welcome1.png"
                alt="welcome1"
                style={{
                  width: "640px",
                  height: "570px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="welcomeUsers">
          <div className="user1">
            <div className="imageBox">
              <img
                src="./images/welcome2.png"
                alt="welcome2"
                style={{
                  width: "286px",
                  height: "255px",
                }}
              />
            </div>
            <div className="profile">
              <img
                src="./images/welcome3.png"
                alt="welcome3"
                style={{
                  width: "196px",
                  height: "66px",
                }}
              />
              <h2>Kyan Management</h2>
              <p>
                One of the most important tasks in management is the proper
                distribution of responsibilities.
              </p>
            </div>
          </div>
          <div className="user2">
            <div className="imageBox">
              <img
                src="./images/welcome4.png"
                alt="welcome4"
                style={{
                  width: "286px",
                  height: "255px",
                }}
              />
            </div>
            <div className="profile">
              <img
                src="./images/welcome5.png"
                alt="welcome5"
                style={{
                  width: "196px",
                  height: "66px",
                }}
              />
              <h2>Intercom Community</h2>
              <p>
                Our team consists of people of different views nationalities and
                we are united by what we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Page2;
