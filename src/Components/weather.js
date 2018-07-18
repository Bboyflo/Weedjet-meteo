import React, { Component } from 'react';
import './../index.css';
import WeatherInfo from './weather-info';

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
    const city = this.props.city || 'Rennes';
    const country = this.props.country || 'France';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=e4a67e1414378e8b1666cabd6a2ab112`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then(data => {
          this.setState({data: data}, () => {
          let color = this.renderColor()
          this.setState({color: color, haveLoaded: true})
        })
      })
      .catch(error => console.log(error))
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
        </div> : <div className="loader-container"> <div className="lds-dual-ring"></div> </div>
      );
    }
}

export default Weather;
