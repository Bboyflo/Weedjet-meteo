import React, { Component } from 'react';
import './index.css';
import Weather from './Components/weather';

class WeedjetMeteo extends Component {
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.animate().then(() => this);
    }, 60000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <Weather />
    );
  }
}

export default WeedjetMeteo;
