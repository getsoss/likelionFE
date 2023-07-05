import "../CSS/Page1.css";
import React from "react";
import Button from "./Button";

function Page1() {
  return (
    <div>
      <div className="Container">
        <div className="textArea">
          <h1>A messenger that is </h1>
          <h1> &nbsp; ahead of its time</h1>
          <p>
            Try the new Move messenger it will definitely impress you with its
            amazing features
          </p>
          <p>
            that will make it easier for you to communicate between your friends
          </p>
          <div className="buttonArea">
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </div>
      <div className="imageArea">
        <img
          src="./images/page1_image1.png"
          alt="image1"
          style={{
            height: "615px",
            position: "absolute",
            left: "0%",
          }}
        />
        <img
          src="./images/page1_image2.png"
          alt="image2"
          style={{
            height: "615px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "100",
          }}
        ></img>
        <img
          src="./images/page1_image11.png"
          alt="image11"
          style={{
            height: "615px",
            position: "absolute",
            right: "0%",
          }}
        ></img>
      </div>
      <div className="logoArea">
        <p>Compaines that have already tried our messenger</p>
        <div>
          <img src="./images/logo1.png" alt="logo1"></img>
          <img src="./images/logo2.png" alt="logo2"></img>
          <img src="./images/logo3.png" alt="logo3"></img>
          <img src="./images/logo3.png" alt="logo33"></img>
          <img src="./images/logo4.png" alt="logo4"></img>
        </div>
      </div>
      <div className="features">
        <div className="featuresBox">
          <div className="box">
            <img src="./images/feature1.png" alt="feature1"></img>
            <h2>End to End</h2>
            <p>
              Our messenger uses only proven technologies. There fore,no one
              will read your messages.
            </p>
          </div>

          <div className="box">
            <img src="./images/feature2.png" alt="feature2"></img>
            <h2>Voice Message</h2>
            <p>
              When you don't have time to write a text, send your companion a
              voice message.
            </p>
          </div>
          <div className="box">
            <img src="./images/feature3.png" alt="feature3"></img>
            <h2>News Widget</h2>
            <p>
              All the news of the world is at hand, our messenger has a
              pre-installed news widget.
            </p>
          </div>
          <div className="box">
            <img src="./images/feature4.png" alt="feature4"></img>
            <h2>Tags</h2>
            <p>
              Place messages in existing tags or create new ones. Using tags
              makes interaction easier.
            </p>
          </div>
        </div>
        <div className="featuresText">
          <h1>Try the familiar functions in the new execution</h1>
          <p>
            The very functions that help you in everyday life are already built
            into our messenger and are not just built in but invented anew
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="contents1">
        <div className="contents1Text">
          <h1>Find out what Move Messenger is capable of</h1>
          <p>
            Watch a short video that tells you about the useful featrues of our
            mobile app. Everything you need is always at hand with Move.
          </p>
          <Button></Button>
        </div>
        <div className="contents1Image">
          <img
            src="./images/contents1_image1.png"
            alt="image1"
            style={{
              height: "615px",
              position: "absolute",
              top: "0%",
              right: "0%",
              margin: "50px",
            }}
          />
          <img
            src="./images/contents1_image2.png"
            alt="image2"
            style={{
              height: "615px",
              position: "absolute",
              top: "10%",
              right: "0%",
              margin: "50px",
            }}
          />
          <div className="noti" style={{ position: "relative", zIndex: "100" }}>
            <img
              src="./images/contents1_image3.png"
              alt="image3"
              style={{
                height: "80px",
              }}
            />
            <div className="notiText">
              <p>Notification</p>
              <h3>Try the messenger features!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
