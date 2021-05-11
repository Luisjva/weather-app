import { Component } from "react";

class Temperature extends Component {
  render() {
    return(
      <div className="temperature">
        <p>{this.props.temperature}<span>°C</span></p>
      </div>
    )
  }
}

export default Temperature;