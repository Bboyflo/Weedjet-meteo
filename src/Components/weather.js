import React, { Component } from 'react';
import './../index.css';
import WeatherInfo from './weather-info';
import axios from "axios"

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null,
                  color: null,
                  haveLoaded: false}

    this.getData = this.getData.bind(this)
    this.renderColor = this.renderColor.bind(this)

    this.getData()
  }

  getData = () => {
    const Ville = 'Rennes,fr'
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + Ville + '&appid=e4a67e1414378e8b1666cabd6a2ab112')
    .then(response => {
      this.setState({data: response["data"]})
      let color = this.renderColor()
      this.setState({color: color, haveLoaded: true})
    })
  }

  renderColor = () => {
    let degree = Math.round(this.state.data["main"]["temp"] - 263)

    if (degree >= 10) {
      return "rgba(193, 66, 66, 0.8)"
    }
    else if (degree > -10 && degree < 10) {
      return "rgba(66, 130, 193, 0.8)"
    }
    else if (degree <= -10) {
      return "rgba(66, 193, 193, 0.8)"
    }
  }
    
    render() {
      return (
        this.state.haveLoaded ? <div className="Weather">
          <WeatherInfo data={this.state.data} Color={this.state.color}/>
        </div> : <div className="loader-container"> <div class="lds-dual-ring"></div> </div> 
      );
    }
}

export default Weather;
