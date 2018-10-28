import React, { Component } from 'react';

import projects from '../../data/projects.json';

import './Projects.css';

class Projects extends Component {
  render() {
    return (
  <div className="projects-list">
    {projects.map(project => {
      return (
        <div className="single-project" key={project.id}>
          <h2>{project.name}</h2>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
      )
    })}
    <div className="projects-tech">
      <h2>Do tworzenia swoich projektów wykorzystuje następujące technologie i narzędzia:</h2>
      <div className="projects-tech-list">
        <div className="projects-tech-item">
          <i className="devicon-html5-plain-wordmark colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-css3-plain-wordmark colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-javascript-plain colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-sass-original colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-nodejs-plain-wordmark colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-webpack-plain colored"></i>
        </div>
        <div className="projects-tech-item">
          <i className="devicon-git-plain colored"></i>
        </div>
      </div>
    </div>
  </div>
)
}
}

export default Projects;
