import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'E-Commerce Website',
    description: 'Designed and developed a dynamic e-commerce website using JavaScript, HTML, CSS, and Firebase Realtime Database.',
    details: [
      'Integrated Firebase Realtime Database for real-time user and product data synchronization.',
      'Implemented Local Storage for persistent cart management across sessions.',
      'Built responsive UI with JavaScript DOM manipulation and CSS media queries.',
      'Deployed on Netlify with Firebase integration and multi-factor authentication.',
      'Improved team collaboration throughout the project lifecycle.'
    ],
    links: [
      { label: 'View Project', url: 'https://ecommerce-project-roy.netlify.app' },
      { label: 'Live Demo on Vercel', url: 'https://ecommerce-eta-rust.vercel.app' }
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Netlify']
  },
  {
    title: 'Campus Kart Project',
    description: 'Developed a web app using React and MongoDB to help students explore B.Tech colleges with detailed info and entrance exam links.',
    details: [
      'Built backend APIs with Node.js and Express for efficient college data management.',
      'Implemented search and filtering features for easy college discovery and smooth user navigation.'
    ],
    links: [],
    tech: ['React', 'Node.js', 'Express', 'MongoDB']
  }
];

function Projects() {
  return (
    <div id="projects">
      <h1 className="title">Projects</h1>
      
      {projectsData.map((project, idx) => (
        <div key={idx} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
            {project.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="tech-tags">
            {project.tech.map((techItem, i) => (
              <span key={i} className="tech-tag">{techItem}</span>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default Projects;
