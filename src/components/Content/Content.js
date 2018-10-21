import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

import './Content.css';

const Content = () => (
  <div className="content">
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/contact' component={Contact}/> 
  </div>
);

export default Content;