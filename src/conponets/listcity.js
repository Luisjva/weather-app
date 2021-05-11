import { Component } from "react";

class ChangeCity extends Component {
  constructor(props) {
    super(props)
    this.changeCity = this.changeCity.bind(this)
  }

  changeCity(e) {
    this.props.changeCity(e)
  }

  render() {
    return(
      <div>
        <ul>
          <li onClick={this.changeCity}>New York</li>
          <li onClick={this.changeCity}>Barcelona</li>
          <li onClick={this.changeCity}>Canada</li>
          <li onClick={this.changeCity}>Argentina</li>
          <li onClick={this.changeCity}>Tokio</li>
        </ul>
      </div>
    )
  }
}

export default ChangeCity