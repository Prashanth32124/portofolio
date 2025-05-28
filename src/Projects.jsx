import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div id="projects">
      <h1 className="title">Projects</h1>
      
      <div className="project-card">
        <h2>Banking and Finance Website</h2>
        <p>Developed a banking and finance platform using React.</p>
        <ul>
          <li>Front-end development and page integration.</li>
          <li>Implemented Scrum methodology for team collaboration.</li>
          <li>Enhanced team management and soft skills.</li>
          <li>Strengthened proficiency in JavaScript, HTML, and CSS.</li>
        </ul>
      </div>

      <div className="project-card">
        <h2>Room Planner & Layout Designing</h2>
        <p>Built a room planner website using Django Framework.</p>
        <ul>
          <li>Developed a full-stack web application.</li>
          <li>Used Scrum methodology for iterative development.</li>
          <li>Improved team management and collaboration.</li>
        </ul>
      </div>

      <div className="project-card">
        <h2>E-Commerce Website</h2>
        <p>Developed a fully functional e-commerce website.</p>
        <ul>
          <li>Built using HTML, CSS, JavaScript, and DOM manipulation.</li>
          <li>Deployed on Netlify with Firebase integration.</li>
          <li>Implemented multi-factor authentication for security.</li>
          <li><a href="https://ecommerce-project-roy.netlify.app" target="_blank" rel="noopener noreferrer">View Project</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
