import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = props => (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">O mnie</Link></li>
          <li><Link to="/projects">Projekty</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
);

export default Navigation;