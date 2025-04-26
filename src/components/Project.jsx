import React, { useEffect, useRef } from 'react';
import './Project.css';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern React portfolio with smooth animations, dark mode, and dynamic routing.',
  },
  {
    title: 'E-Commerce Store',
    desc: 'A premium furniture store frontend with responsive design and seamless UI/UX.',
  },
  {
    title: 'Auth UI Pages',
    desc: 'Authentication pages with elegant UI, form validation, and routing system.',
  },
];

const Project = () => {
  const cardsRef = useRef([]);
  const tagsRef = useRef([]);

  useEffect(() => {
    const revealOnScroll = () => {
      const triggerPoint = window.innerHeight * 0.85;

      cardsRef.current.forEach((el) => {
        if (el && el.getBoundingClientRect().top < triggerPoint) {
          el.classList.add('animate-show');
        }
      });

      tagsRef.current.forEach((el) => {
        if (el && el.getBoundingClientRect().top < triggerPoint) {
          el.classList.add('animate-show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger once on mount

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="section-title-glow">🚀 Featured Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <span
              className="project-tag"
              ref={(el) => (tagsRef.current[index] = el)}
            >
              #{proj.title.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;