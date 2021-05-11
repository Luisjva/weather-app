import { Component } from "react";

class WeatherImg extends Component {
  render() {
    return(
      <img className="weather-img__weather" src={this.props.picture} alt="img" />
    )
  }
}

export default WeatherImg