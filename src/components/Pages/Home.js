import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <div className="home">
    <div className="title">
      <h2>Cześć, jestem Michał.</h2>
      <p>Chcę zostać Junior Front-end Developerem.</p>
      <Link to="/contact">
        <div className="button">Napisz do mnie</div>
      </Link>
    </div>
  </div>
);

export default Home;