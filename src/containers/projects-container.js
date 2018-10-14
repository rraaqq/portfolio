import React, { Component } from 'react';
import Projects from '../presentational/Projects/projects-component';
import projectsData from '../data/projects.json';

class ProjectsContainer extends Component {
  
  render = () => {
    return (
      <Projects projects={projectsData} />
    )
  }
}

export default ProjectsContainer;