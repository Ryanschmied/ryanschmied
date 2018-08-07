import React from 'react';
import './animation.css';
import Particles from 'reactparticles.js';

const Animation = () => (
    <div className="animation-body animation fadeIn">
      <Particles id="particles-js" config="../../../particles.json" />
    </div>
)

export default Animation;
