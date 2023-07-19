import "../CSS/Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="items">
          <div className="item1">
            <h1>Move</h1>
            <p>
              Move - Multipurpose Design Template will help you develop your
              website design.
            </p>
            <img src="../images/dribbble.png" alt="dribbble" style={{}} />
            <img src="../images/facebook.png" alt="facebook" style={{}} />
            <img src="../images/twitter.png" alt="twitter" style={{}} />
            <img src="../images/youtube.png" alt="youtube" style={{}} />
          </div>
          <div className="item2">
            <h3>Home</h3>
            <p>Desktop App</p>
            <p>Mobile App</p>
            <p>SaaS</p>
            <p>Event</p>
            <p>Software</p>
          </div>
          <div className="item3">
            <h3>Pages</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Case Studies</p>
            <p>Pricing</p>
          </div>
          <div className="item4">
            <h3>Blog</h3>
            <p>Blog Listing</p>
            <p>Blog Article</p>
            <p>Newsroom</p>
          </div>
          <div className="item5">
            <h3>Portfolio</h3>
            <p>Portfolio</p>
            <p>Single Case</p>
          </div>
        </div>
        <div className="footerText">
          <p>© 2019-2020 Wave Multipurpose Design Template.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
