import React from 'react';
import '../styles/project.css'; // Import the CSS file

const projects = [
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 1',
    githubLink: 'https://github.com/your-username/project-1',
    image: 'https://example.com/project1-image.jpg',
    description: 'Description of Project 1.',
  },
  // Repeat the structure for the other projects
];

const Projects = () => {
  return (
    <div>
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={`Project ${index + 1}`} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Projects