import { Component } from "react";
import NextDays from './nextday';


class MoreDiv extends Component {
  render() {
    return(
      <div className="more-div">
        <NextDays
          tempMax={this.props.day1.tempMax}
          tempMin={this.props.day1.tempMin}
          dateTime="Tomorrow"
          code={this.props.day1.code}
        />
        <NextDays
          tempMax={this.props.day2.tempMax}
          tempMin={this.props.day2.tempMin}
          dateTime={this.props.day2.dateTime}
          code={this.props.day2.code}
        />
        <NextDays
          tempMax={this.props.day3.tempMax}
          tempMin={this.props.day3.tempMin}
          dateTime={this.props.day3.dateTime}
          code={this.props.day3.code}
        />
        <NextDays
          tempMax={this.props.day4.tempMax}
          tempMin={this.props.day4.tempMin}
          dateTime={this.props.day4.dateTime}
          code={this.props.day4.code}
        />
        <NextDays
          tempMax={this.props.day5.tempMax}
          tempMin={this.props.day5.tempMin}
          dateTime={this.props.day5.dateTime}
          code={this.props.day5.code}
        />
      </div>
    )
  }
}

export default MoreDiv