import "../CSS/Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  let linkPath = "";

  if (text === "Get Started") {
    linkPath = "/page4";
  }
  return (
    <div>
      <Link to={linkPath}>
        <button>{text}</button>
      </Link>
    </div>
  );
};
export default Button;
