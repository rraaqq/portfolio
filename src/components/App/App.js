import React from 'react';

import Navigation from '../Navigation/Navigation';
import Logo from '../Navigation/Logo';
import Footer from '../Navigation/Footer';
import Content from '../Content/Content';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add( faArrowUp );

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Logo />
        <Navigation />
        <Footer />
      </header>
      <section>
        <Content />
      </section>
      <button className="back-to-top"><FontAwesomeIcon icon={ faArrowUp } /></button>
    </div>
  )
}

export default App;