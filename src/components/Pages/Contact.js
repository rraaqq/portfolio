import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faUserAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

library.add( faMobileAlt, faUserAlt, faEnvelope, faMapMarkedAlt );

const Contact = () => (
  <div className="contact-container">
    <div className="contact-img">
      <div className="contact-border"><h2><span>Kontakt</span></h2></div>
    </div>
    <div className="contact-details">
      <div className="contact-details-item"><FontAwesomeIcon icon={ faUserAlt } />Michał Raczkowski</div>
      <div className="contact-details-item"><FontAwesomeIcon icon={ faMobileAlt } />Telefon: 012-345-678</div>
      <div className="contact-details-item"><FontAwesomeIcon icon={ faEnvelope } />E-mail: michal.raczkowski.88@gmail.com</div>
      <div className="contact-details-item"><FontAwesomeIcon icon={ faMapMarkedAlt } />Adres: Łódź, Polska</div>
    </div>
  </div>
);

export default Contact;