import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-container">
      {/* Skills Bar */}
      <div className="skills-bar" data-aos="fade-up">
        <div className="skill"><i className="fab fa-html5"></i> <span>HTML5</span></div>
        <div className="skill"><i className="fab fa-css3-alt"></i> <span>CSS</span></div>
        <div className="skill"><i className="fab fa-js"></i> <span>JavaScript</span></div>
        <div className="skill"><i className="fab fa-node-js"></i> <span>Node.js</span></div>
        <div className="skill"><i className="fab fa-react"></i> <span>React</span></div>
        <div className="skill"><i className="fab fa-git-alt"></i> <span>Git</span></div>
        <div className="skill"><i className="fab fa-github"></i> <span>GitHub</span></div>
      </div>

      {/* About Section */}
      <div className="about-section" data-aos="fade-up">
        <div className="service-icon">
          <i className="fas fa-code"></i>
          <span>Website Development</span>
        </div>
        <h2 className="about-heading">About me</h2>
        <p className="about-text">
          Although I’m just starting my professional journey, I’ve already built several creative frontend projects using <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>. I'm always excited to learn more and improve every day.
        </p>
      </div>
    </section>
  );
};

export default About;
