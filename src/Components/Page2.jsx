import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import "../CSS/Page2.css";

function Page2() {
  const Page3Text1 = "Slack";
  const Page3Text2 = "Spotify";
  const Page3Text3 = "BuzzFeed";
  const Page3Text4 = "Target";
  const Page3Text5 = "Mailchimo";
  const Page3Text6 = "Dropbox";

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
      <div className="boxContainer">
        <div className="boxLine1">
          <Link to={`/Page3/${encodeURIComponent(Page3Text1)}`}>
            <div className="box1">
              <div className="boxImage">
                <img
                  src="./images/box1.png"
                  alt="box1"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box11.png"
                    alt="box11"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>
              <div className="boxText">
                <h2>Slack</h2>

                <p>
                  Think about how many people and different companies our
                  corporate messenger brings together.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
          <Link to={`/Page3/${encodeURIComponent(Page3Text2)}`}>
            <div className="box2">
              <div className="boxImage">
                <img
                  src="./images/box2.png"
                  alt="box1"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box22.png"
                    alt="box11"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>

              <div className="boxText">
                <h2>Spotify</h2>
                <p>
                  Our app allows everyone to listen to music of different
                  genres. You can try it on your smartphone or PC.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
          <Link to={`/Page3/${encodeURIComponent(Page3Text3)}`}>
            <div className="box3">
              <div className="boxImage">
                <img
                  src="./images/box3.png"
                  alt="box3"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box33.png"
                    alt="box33"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>
              <div className="boxText">
                <h2>BuzzFeed</h2>
                <p>
                  Think about how many people and different companies our
                  corporate messenger brings together.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
        </div>
        <div className="boxLine2">
          <Link to={`/Page3/${encodeURIComponent(Page3Text4)}`}>
            <div className="box4">
              <div className="boxImage">
                <img
                  src="./images/box4.png"
                  alt="box4"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box44.png"
                    alt="box33"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>
              <div className="boxText">
                <h2>Target</h2>
                <p>
                  The goal of our company is to make various products and
                  products available.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
          <Link to={`/Page3/${encodeURIComponent(Page3Text5)}`}>
            <div className="box5">
              <div className="boxImage">
                <img
                  src="./images/box5.png"
                  alt="box3"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box55.png"
                    alt="box33"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>
              <div className="boxText">
                <h2>Mailchimo</h2>
                <p>
                  Many businesses are working harder than ever to stay connected
                  with customers.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
          <Link to={`/Page3/${encodeURIComponent(Page3Text6)}`}>
            <div className="box6">
              <div className="boxImage">
                <img
                  src="./images/box6.png"
                  alt="box3"
                  style={{
                    width: "392px",
                    height: "298px",
                  }}
                />
                <div className="boxImage2">
                  <img
                    src="./images/box66.png"
                    alt="box33"
                    style={{
                      width: "196px",
                      height: "66px",
                    }}
                  />
                </div>
              </div>
              <div className="boxText">
                <h2>Dropbox</h2>
                <p>
                  Work with files, use tools, and interact with colleagues
                  directly in Dropbox. Everything you need is put together.
                </p>
                <div className="arrowLink">
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
            </div>
          </Link>
        </div>
      </div>
      <div className="communityContainer">
        <div className="content1">
          <div className="contentImage">
            <img
              src="./images/content1.png"
              alt="content1"
              style={{
                width: "286px",
                height: "255px",
              }}
            />
          </div>
          <div className="contentText">
            <img
              src="./images/content11.png"
              alt="content11"
              style={{
                width: "196px",
                height: "66px",
              }}
            />
            <h4>Dribbble Community</h4>
            <p>
              Initially our goal was to unite designers from all over the world
              under one social network.
            </p>
          </div>
        </div>
        <div className="content2">
          <div className="contentImage">
            <img
              src="./images/content2.png"
              alt="content2"
              style={{
                width: "286px",
                height: "255px",
              }}
            />
          </div>
          <div className="contentText">
            <img
              src="./images/content22.png"
              alt="content22"
              style={{
                width: "196px",
                height: "66px",
              }}
            />
            <h4>Flickr Community</h4>
            <p>
              Join the Flickr community, home to tens of billions of photos and
              2 million groups.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Page2;
