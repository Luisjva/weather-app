import { Component } from "react";
import "./more.css"

class More extends Component {
  render() {
    return (
      <div className="more-of-today">

        <div className="wind box">
          <p>Wind status</p>
          <p className="principal">{this.props.windStatus}<span>mph</span></p>
          <div>
            <img src="/img/send.svg" alt="" />
            <p>{this.props.windDirection}</p>
          </div>
        </div>


        <div className="humidity box">
          <p>Humidity</p>
          <p className="principal">{this.props.humidity}<span>%</span></p>
          <div className="humidity-div">
            <div className="numeros">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <div className="progreso">
              <span style={{ width: this.props.humidity + "%" }}></span>
            </div>
          </div>
        </div>


        <div className="visibility box">
          <p>Visibility</p>
          <p className="principal">{this.props.visibility}<span>miles</span></p>
        </div>


        <div className="visibility box">
          <p>Air pressure</p>
          <p className="principal">{this.props.airPressure}<span>mb</span></p>
        </div>



      </div>
    )
  }
}

export default More