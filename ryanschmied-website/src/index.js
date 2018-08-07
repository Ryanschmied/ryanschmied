import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/navigation/navigation.js';
import Introduction from './components/introduction/introduction.js';
import Experience from './components/experience/experience.js';
import Animation from './components/animation/animation.js';
import Contact from './components/contact/contact.js';
//import Animation from './components/landingAnimmation/animation.js';

// Your application goes here

const App = () => (
    <div className="main-container">
      <Navigation></Navigation>
      <Animation></Animation>
      <Introduction></Introduction>
      <Experience></Experience>
      <Contact></Contact>
    </div>
)


// ReactRouter render goes here
ReactDOM.render(<App />, document.getElementById('root'));
