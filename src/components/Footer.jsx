import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Noor.dev</h2>
        <p className="footer-tagline">Transforming Ideas into Reality ✨</p>
        <div className="footer-line"></div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} Noor — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
