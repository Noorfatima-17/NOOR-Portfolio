
import React from "react";
import "./Footer.css"; // assuming CSS is in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Noor.dev</h2>
        <p className="footer-tagline">Crafting code with creativity & passion ✨</p>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Noor — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
