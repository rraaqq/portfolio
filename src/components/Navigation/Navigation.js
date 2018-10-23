import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => (
  <div className="navigation">
    <nav>
      <ul>
        <li><Link to="/" onClick={props.scrollDown}>Home</Link></li>
        <li><Link to="/about" onClick={props.scrollDown}>O mnie</Link></li>
        <li><Link to="/projects" onClick={props.scrollDown}>Projekty</Link></li>
        <li><Link to="/contact" onClick={props.scrollDown}>Kontakt</Link></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;