import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/navigation/navigation.js';
import Introduction from './components/introduction/introduction.js';
import Experience from './components/experience/experience.js';
import Animation from './components/animation/animation.js';
import Contact from './components/contact/contact.js';
import Heading from './components/heading/heading.js';
//import Animation from './components/landingAnimmation/animation.js';

// Your application goes here

const App = () => (
    <div className="main-container">
      <Navigation></Navigation>
      <Animation></Animation>
      <div className="main-content" >
        <Heading>Introduction</Heading>
        <Introduction></Introduction>
        <Heading>Experience</Heading>
        <Experience>TELUS Digital</Experience>
        <Experience>Tenzing Managed IT Services</Experience>
        <Experience>HITCH</Experience>
        <Experience>DeepSubconcious.ai</Experience>
        <Experience>EPOCH</Experience>
        <Heading>Contact</Heading>
        <Contact></Contact>
      </div>
    </div>
)


// ReactRouter render goes here
ReactDOM.render(<App />, document.getElementById('root'));
