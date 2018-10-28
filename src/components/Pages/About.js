import React from 'react';

import './About.css';

const About = () => (
  <div className="about-container">
    <div className="about-img">
      <div className="about-border"><h2><span>O mnie</span></h2></div>
    </div>
    <div className="about-me">
      <p>Nazywam się Michał Raczkowski i mieszkam w Łodzi. Jestem pełen energii i lubię przełamywać swoje granice.  
        Programowania uczę się intensywnie od ponad poł roku.
        Przez ten czas zdobyłem doświadczenie w tworzeniu responsywnych stron www i aplikacji.  
        Prywatnie lubię podróżować i fotografować. Obecnie poszukuje swojej pierwszej pracy jako Junior Front-end Developer.
      </p>
      <div className="about-me-img"></div>
    </div>
  </div>
);

export default About;