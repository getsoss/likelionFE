import "../CSS/Header.css";
import "../CSS/Button.css";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <h1>LikeLion</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Page2">Studies</Link>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <Button></Button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
