import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/home-component';
import About from '../About/about-component';
import Projects from '../Projects/projects-component';
import Contact from '../Contact/contact-component';

const Content = () => (
  <div className="content">
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/contact' component={Contact}/> 
  </div>
);

export default Content;