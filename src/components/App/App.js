import React from 'react';

import Navigation from '../Navigation/Navigation';
import Logo from '../Navigation/Logo';
import Footer from '../Navigation/Footer';
import Content from '../Content/Content';

import './App.css';

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
    </div>
  )
}

export default App;