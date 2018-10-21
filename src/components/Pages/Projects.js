import React from 'react';

import projects from '../../data/projects.json';

import './Projects.css';

const Projects = () => (
  <div className="projects-list">
    {projects.map(project => {
      return (
        <div className="single-project" key={project.id}>
          <p>{project.name}</p>
        </div>
      )
    })}
  </div>
);

export default Projects;

