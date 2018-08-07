import React from 'react';
import '../index.css';
import landingImage1 from '../assets/landing.jpg';
import landingImage2 from '../assets/landing2.jpg';
import landingImage3 from '../assets/landing3.jpg';

const Landing = () => (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators0" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src={landingImage1} alt="First slide" id="landing-images"/>
    </div>
    <div className="carousel-item" >
      <img src={landingImage2} alt="Second slide" id="landing-images"/>
    </div>
    <div className="carousel-item" >
      <img src={landingImage3} alt="Third slide" id="landing-images"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)

export default Landing;