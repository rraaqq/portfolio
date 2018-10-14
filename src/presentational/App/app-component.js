import React from 'react';
import Navigation from '../Nav/navigation-component';
import Logo from '../Logo/logo-component';
import Content from '../Content/content-component';
import Footer from '../Footer/footer-component';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <div className="container__col1">
        <Logo />
        <Navigation />
        <Footer />
      </div>
      <div className="container__col2">
        <Content />
      </div>
    </div>
  )
}

export default App;