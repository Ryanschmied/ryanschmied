import React from 'react';
import './animation.css';
import Particles from 'reactparticles.js';

const Animation = () => (
    <div className="animation-body">
      <div className="landing-nav animated fadeInLeft">
        <h5>Introduction</h5>
        <h5>Experience</h5>
        <h5>Contact</h5>
      </div>
      <Particles id="animation" config="particles.json" />
    </div>
)

export default Animation;
