import React from "react";
import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

import "../CSS/Page5.css";

function Page5() {
  return (
    <div>
      <Header></Header>
      <div className="createContainer">
        <div className="createContainerBox">
          <div className="createText">
            <h1>Sign in to LikeLion</h1>
            <p>Login to manage your account</p>
          </div>
          <div className="inputArea"></div>
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

          <div className="blueBigButton">
            <Button text="Sign In"></Button>
          </div>
          <div className="signArea">
            <p>Do not have an account?</p>
            <Link to="/Page4">
              <h4>Sign up</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
