import React, { Component } from 'react';
import Navigation from '../presentational/Nav/navigation-component';
import Logo from '../presentational/Logo/logo-component';
import Content from '../presentational/Content/content-component';

class AppContainer extends Component {
  constructor(props) {
    super();
  }

  render = () => {
    return (
        <div>
          <Logo />
          <Navigation />
          <Content />
          </div>
    )
  }
}

export default AppContainer;