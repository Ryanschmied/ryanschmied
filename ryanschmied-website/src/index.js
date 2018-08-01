import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';
import Landing from './components/landing';
import Introduction from './components/introduction';

// Your application goes here

const App = () => (
    <div>
      <Navigation></Navigation>
      <Landing></Landing>
      <Introduction></Introduction>
    </div>
)


// ReactRouter render goes here
ReactDOM.render(<App />, document.getElementById('root'));
