import React from "react";
import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

import "../CSS/Page4.css";

function Page4() {
  return (
    <div>
      <Header></Header>
      <div className="createContainer">
        <div className="createContainerBox">
          <div className="createText">
            <h1>Create your account</h1>
            <p>Made with love for designers & developers</p>
          </div>
          <div className="inputArea">
            <p>Name</p>
            <div className="inputBox">
              <div className="inputBoxContent">
                <img
                  src="./images/inputIcon1.png"
                  alt="arrow"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Sergei Filatov"
                  style={{
                    border: "none",
                    borderBottom: "0px solid black",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="inputArea">
            <p>Email Adress</p>
            <div className="inputBox">
              <div className="inputBoxContent">
                <img
                  src="./images/inputIcon2.png"
                  alt="arrow"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
                <input
                  type="text"
                  placeholder="web@plumweb.ru"
                  style={{
                    border: "none",
                    borderBottom: "0px solid black",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="inputArea">
            <div className="passwordArea">
              <p>Password</p>
              <h4>Show Password</h4>
            </div>

            <div className="inputBox">
              <div className="inputBoxContent">
                <img
                  src="./images/inputIcon3.png"
                  alt="arrow"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
                <input
                  type="text"
                  placeholder="••••••••••"
                  style={{
                    border: "none",
                    borderBottom: "0px solid black",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="checkArea">
            <input type="checkbox" name="" id="" />
            <p>I agree to the Terms & Conditions</p>
          </div>
          <div className="blueBigButton">
            <Button text="Create my account"></Button>
          </div>
          <div className="signArea">
            <p>Already have an account?</p>
            <Link to="/Page5">
              <h4>Sign in</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
