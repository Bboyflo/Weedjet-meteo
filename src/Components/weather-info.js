import React, { Component } from 'react';
import './../index.css';
import {WeatherCloudyIcon, WeatherRainyIcon, WeatherSnowyIcon, WeatherSunnyIcon, WeatherWindyIcon} from 'mdi-react';

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data}
        this.renderIcon = this.renderIcon.bind(this)
    }

    renderIcon (IconId) {
        switch(IconId) {
                case 'Clear':
                    return <WeatherSunnyIcon color="#fff" size={120}/>
            
                case 'Snow': 
                    return <WeatherSnowyIcon color="#fff" size={120}/>

                case 'Clouds':  
                    return <WeatherCloudyIcon color="#fff" size={120}/>

                case 'Rain':  
                    return <WeatherRainyIcon color="#fff" size={120}/>
            }
        }
    renderBG (RBG) {
    switch(RBG) {
            case 'Clear':
                return "https://www.voyageavecnous.fr/wp-content/uploads/2015/01/plage-paradisiaque-image.jpg"
        
            case 'Snow': 
                return "http://www.la-retouche-photo.com/wp-content/uploads/2016/12/apres-effet-neige-dans-Photoshop-la-retouche-photo.jpg"

            case 'Clouds':  
                return "http://www.lesaviezvous.net/wp-content/uploads/2014/11/nuage.jpg"

            case 'Rain':  
                return "https://media.mnn.com/assets/images/2017/03/raindrops-plants-smell.jpg.653x0_q80_crop-smart.jpg"
        }
    }

    render() {
        return (
        <div className="weather-info">
            <div className="weather-overlay" style={{background: this.props.Color + " url(" + this.renderBG(this.state.data["weather"][0]["main"]) + ")", backgroundSize: "cover"}}>
                <div className="weather-overlay-info">
                    <div className="weather-overlay-left">
                        <div className="weather-text">
                            {this.state.data["name"]}
                        </div>
                        <div>
                            <div className="weather-speed">
                                <span className="windy-icon"><WeatherWindyIcon color="#fff" size={16}/> </span><span style={{fontWeight: "300", fontSize: "1.2em", color: "white"}}>{Math.round(this.state.data["wind"]["speed"])} </span> <span style={{fontWeight: "300", fontSize: "0.8em", color: "white"}}>KMH</span>                            
                            </div>
                            <div className="weather-degrees" style={{fontWeight: "300", fontSize: "1.4em", color: "white"}}>
                                {Math.round(this.state.data["main"]["temp"]) - 273}°            
                            </div>
                        </div>
                    </div>
                    <div className="weather-overlay-right">
                        <div className="weather-icon"> 
                            {this.renderIcon(this.state.data["weather"][0]["main"])}
                        </div>
                    </div>
                </div>
            </div>      
        </div>
        );
  }
}

export default WeatherInfo;
