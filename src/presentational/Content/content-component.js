import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/home-component';
import About from '../About/about-component';
import ProjectsContainer from '../../containers/projects-container';
import Contact from '../Contact/contact-component';

const Content = () => (
  <div className="content">
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/projects' component={ProjectsContainer}/>
    <Route path='/contact' component={Contact}/> 
  </div>
);

export default Content;