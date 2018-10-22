import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

const Logo = () => (
  <div className="logo">
    <hr/>
    <Link to="./"><h1><span>&#60;</span>MR<span>&#47;&#62;</span></h1></Link>
    <h2>M<span>ichał</span><br/>R<span>aczkowski</span></h2>
  </div>
);

export default Logo;