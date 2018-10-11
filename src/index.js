import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/app-container';

render(
  <Router routes="routes">
    <AppContainer />
    </Router>, 
  document.getElementById('root')
);