import React from 'react';
import './Header.css';

function Header() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="glow-heading">Hi, I'm Noor</h1>
        <p className="typing">Frontend Developer ✨</p>
        <div className="hero-buttons">
          <a className="neon-btn" href="#projects">View Projects</a>
          <a className="neon-btn" href="#contact">Contact Me</a>
        </div>
      </div>
      
      <div className="particles">
        <span style={{ left: '10%', animationDelay: '0s' }}></span>
        <span style={{ left: '25%', animationDelay: '2s' }}></span>
        <span style={{ left: '50%', animationDelay: '4s' }}></span>
        <span style={{ left: '70%', animationDelay: '1s' }}></span>
        <span style={{ left: '85%', animationDelay: '3s' }}></span>
        <span style={{ left: '25%', animationDelay: '2s' }}></span>
        <span style={{ left: '50%', animationDelay: '4s' }}></span>
        <span style={{ left: '70%', animationDelay: '1s' }}></span>
      </div>
    </section>
  );
}

export default Header;
