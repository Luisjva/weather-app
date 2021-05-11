import { Component } from "react";
import ChangeCity from "./listcity";
import './seach.css'

class Seach extends Component {
  render() {
    return (
      <div className="seach">
        <div className="button">
          <button onClick={this.props.changeSeach}>X</button>
        </div>
        <ChangeCity 
          changeCity={this.props.changeCity}
        />
      </div>
    )
  }
}

export default Seach