import React from 'react';
import './projects.css';

const Projects = (props) => (
  <div className="projects-list">
    {props.projects.map(project => {
      return (
        <div className="single-project" key={project.id}>
          <h1>{project.name}</h1>
          <p><a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Github</a></p>
        </div>
      )
    })}
  </div>
);

export default Projects;