import React, { Component } from 'react';
import './index.css';
import Weather from './Components/weather';

class WeedjetMeteo extends Component {
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.animate().then(() => this);
    }, this.props.refreshInterval || 60000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <Weather country={this.props.country} city={this.props.city}/>
    );
  }
}

export default WeedjetMeteo;
