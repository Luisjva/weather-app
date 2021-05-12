import { Component } from "react";
import './listcity.css'

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
          <li onClick={this.changeCity}>New York US</li>
          <li onClick={this.changeCity}>Barcelona ES</li>
          <li onClick={this.changeCity}>Montréal CA</li>
          <li onClick={this.changeCity}>Buenos Aires AR</li>
          <li onClick={this.changeCity}>Tokyo JP</li>
        </ul>
      </div>
    )
  }
}

export default ChangeCity