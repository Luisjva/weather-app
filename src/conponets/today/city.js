import { Component } from "react";

class City extends Component {
  render() {
    return(
      <div className="city">
        <img src="/img/location.svg" alt="" />
        <p>{this.props.city}</p>
      </div>
    )
  }
}

export default City