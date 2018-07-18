import React, { Component } from 'react';
import './index.css';
import Weather from './Components/weather';

class WeedjetMeteo extends Component {
  render() {
    return (
      <Weather refreshInterval={this.props.refreshInterval}
               animate={this.props.animate}
               country={this.props.country}
               city={this.props.city}
               appId={this.props.appId}
      />
    );
  }
}

export default WeedjetMeteo;
