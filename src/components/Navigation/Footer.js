import React from 'react';

import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add( faGithub, faLinkedinIn, faInstagram, faEnvelope );

const Footer = () => (
  <div className="footer">
    <div className="footer__media">
      <a href="https://github.com/rraaqq" target="_blank" rel="noopener noreferrer">
        <div className="footer__media-single">
          <FontAwesomeIcon icon={ faGithub } />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/micha%C5%82-raczkowski-253b6b165/" target="_blank" rel="noopener noreferrer">
        <div className="footer__media-single">
          <FontAwesomeIcon icon={ faLinkedinIn } />
        </div>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <div className="footer__media-single">
          <FontAwesomeIcon icon={ faInstagram } />
        </div>
      </a>
      <a href="mailto:michal.raczkowski.88@gmail.com">
        <div className="footer__media-single">
          <FontAwesomeIcon icon={ faEnvelope } />
        </div>
      </a>
    </div>
    <p>© 2018 Michał Raczkowski. <br/> All rights reserved.</p>
  </div>
);

export default Footer;