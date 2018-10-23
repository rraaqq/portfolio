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

class App extends React.Component {

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  scrollDown() {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div className="app-container">
      <header>
        <Logo />
        <Navigation scrollDown={this.scrollDown}/>
        <Footer />
      </header>
      <section>
        <Content />
      </section>
      <button className="back-to-top" onClick={this.scrollTop}><FontAwesomeIcon icon={ faArrowUp } /></button>
    </div>
    );
  }
}

export default App;