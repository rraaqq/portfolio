import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './presentational/App/app-component';

render(
  <Router routes="routes">
    <App />
    </Router>, 
  document.getElementById('root')
);