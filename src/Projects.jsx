import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'CampusKart',
    description: 'A platform to help students explore B.Tech colleges with entrance exam info and useful resources.',
    details: [
      'Built using the MERN stack (MongoDB, Express, React, Node.js).',
      'Implemented search and filtering features for user-friendly navigation.',
      'Responsive UI with React and Tailwind CSS.',
      'College and entrance exam links integrated for easy access.'
    ],
    links: [
      { label: 'Live Site', url: 'https://campus-kartfrontend.vercel.app/' }
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'iMail',
    description: 'A full-stack email system with authentication and messaging features.',
    details: [
      'Developed using the MERN stack.',
      'Custom login system and email validation.',
      'Messages sent and stored via backend APIs.'
    ],
    links: [
      { label: 'Live Demo', url: 'https://imail.vercel.app' }
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'HomeIn',
    description: 'A shared-home organizer app built with React.js and MongoDB to manage weekly purchase duties.',
    details: [
      'Members add items to a shared cart; the weekly buyer marks them as bought or notifies if unavailable.',
      'Built using React.js and MongoDB.',
      'Deployment: Not yet deployed.'
    ],
    links: [],
    tech: ['React', 'MongoDB']
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