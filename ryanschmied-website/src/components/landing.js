import React from 'react';
import '../index.css';

const Landing = () => (
  <div class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/landing.jpg" class="img-fluid" alt="First slide"/>
        </div>
        <div class="carousel-item">
            <img src="../assets/landing2.jpg" class="img-fluid" alt="Second slide"/>
        </div>
        <div class="carousel-item">
            <img src="../assets/landing3.jpg" class="img-fluid" alt="Third slide"/>
        </div>
    </div>
  </div>
)

export default Landing;