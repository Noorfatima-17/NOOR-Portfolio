import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Modern React portfolio with animations, scroll nav, and a clean UI.',
  },
  {
    title: 'E-Commerce Store',
    desc: 'Furniture store frontend built with React + Tailwind CSS.',
  },
  {
    title: 'Auth UI Pages',
    desc: 'Professional login/signup UI with validation and routing.',
  },
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
