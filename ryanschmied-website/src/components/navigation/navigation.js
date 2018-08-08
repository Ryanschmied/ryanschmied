import React from 'react';
import './navigation.css';

//var smoothScroll = require('smoothscroll');

 class Navigation extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 5;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render () {
    return(
    <nav className="navbar navbar-expand-lg animated fadeInDown">
      <p className="navbar-brand" background-color={this.state.isTop ? 'transparent' : 'black'}>Ryan Schmied</p>
    </nav>
    )}
  
}

export default Navigation;
