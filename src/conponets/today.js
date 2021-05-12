import React from "react"
import Seach from "./seach";
import City from "./today/city";
import Temperature from "./today/temperature";
import WeatherImg from "./today/weather-img";

class Today extends React.Component {
  constructor(props) {
    super(props)
    this.picture = this.picture.bind(this)
    this.changeSeach = this.changeSeach.bind(this)
  }

  picture() {
    let clima = "";


    if ( //Thunderstorm 
      this.props.code === 200 || this.props.code === 201 ||
      this.props.code === 202 || this.props.code === 230 ||
      this.props.code === 231 || this.props.code === 232
    ) {
      clima = "Thunderstorm"
    } else if ( //Hail
      this.props.code === 233
    ) {
      clima = "Hail"
    } else if (//Drizzle
      this.props.code === 300 || this.props.code === 301 ||
      this.props.code === 302
    ) {
      clima = "LightRain"
    } else if (//Rain
      this.props.code === 500 || this.props.code === 501 ||
      this.props.code === 502 || this.props.code === 511 ||
      this.props.code === 520 || this.props.code === 522
    ) {
      clima = "HeavyRain"
    } else if (//Shower rain
      this.props.code === 521 || this.props.code === 900
    ) {
      clima = "Shower"
    } else if (//Snow
      this.props.code === 600 || this.props.code === 601 ||
      this.props.code === 602 || this.props.code === 610 ||
      this.props.code === 621 || this.props.code === 622 ||
      this.props.code === 623
    ) {
      clima = "Snow"
    } else if (//Sleet
      this.props.code === 611 || this.props.code === 612
    ) {
      clima = "Sleet"
    } else if (//I dont know
      this.props.code === 700 || this.props.code === 711 ||
      this.props.code === 721 || this.props.code === 731 ||
      this.props.code === 741 || this.props.code === 751
    ) {
      clima = "HeavyCloud"
    } else if (this.props.code === 800) {
      clima = "Clear"
    } else if (
      this.props.code === 801 || this.props.code === 802 ||
      this.props.code === 803
    ) {
      clima = "LightCloud"
    } else {
      clima = "HeavyCloud";
    }


    return `https://raw.githubusercontent.com/Luisjva/weather-app/main/public/img/${clima}.png`
  }

  changeSeach() {
    let value = !this.props.seach
    this.props.changeSeach(value)
  }

  render() {
    return (
      <div className="today-temperature">

        {this.props.seach ? <Seach changeSeach={this.changeSeach} changeCity={this.props.changeCity}/> : <div></div>}
        <div className="form">
          <button onClick={this.props.changeSeach}>Seach for places</button>
        </div>

        <div className="weather-img">
          <div>
            <img src="https://raw.githubusercontent.com/Luisjva/weather-app/main/public/img/Cloud-background.png" alt="background" />
          </div>
          {this.props.code == null ? <div></div> : <WeatherImg picture={this.picture()}/>}
        </div>
        


        {this.props.temperature == null ? <div></div> : <Temperature temperature={this.props.temperature}/>}
        


        <div className="description">
          <p>{this.props.description}</p>
        </div>


        {this.props.description == null ? <div></div> : <p className="date">Today</p>}


        {this.props.city == null ? <div></div> : <City city={this.props.city} />}
      </div>
    )
  }
}

export default Today