import React from 'react';
import './App.css';
import More from './conponets/more';
import NextDays from './conponets/nextday';
import Today from './conponets/today.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //Data of the day
      temperature: null,
      description: null,
      date: null,
      city: null,
      windStatus: null,
      windDirection: null,
      humidity: null,
      visibility: null,
      airPressure: null,
      code: null,
      //data for the next 5 days
      day1: {
        tempMax: null,
        tempMin: null,
        dateTime: null,
        code: null
      },
      day2: {
        tempMax: null,
        tempMin: null,
        dateTime: null,
        code: null
      },
      day3: {
        tempMax: null,
        tempMin: null,
        dateTime: null,
        code: null
      },
      day4: {
        tempMax: null,
        tempMin: null,
        dateTime: null,
        code: null
      },
      day5: {
        tempMax: null,
        tempMin: null,
        dateTime: null,
        code: null
      }
    }
  }
  componentDidMount() {
    //data's today
    fetch('https://api.weatherbit.io/v2.0/current?key=f8d41c7187b4444497ba006c8d9ee488&lang=en&city_id=5128581')
      .then(res => { return res.json() })
      .then(res => {

        let day = res.data[0].datetime
        let position = day.indexOf(":")
        day = day.slice(0, position)
        let date = new Date(day)
        console.log(date)

        console.log(res.data[0].wind_cdir_full)



        this.setState({
          temperature: res.data[0].temp,
          description: res.data[0].weather.description,
          date: day,
          city: res.data[0].city_name,
          windStatus: res.data[0].wind_spd,
          windDirection: res.data[0].wind_cdir_full,
          humidity: res.data[0].rh,
          visibility: res.data[0].vis,
          airPressure: res.data[0].pres,
          code: res.data[0].weather.code
        })
      })

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?&key=f8d41c7187b4444497ba006c8d9ee488&days=5&city_id=5128581')
      .then(res => res.json())
      .then(res => {
        this.setState({
          day1: {
            tempMax: res.data[0].max_temp,
            tempMin: res.data[0].min_temp,
            dateTime: res.data[0].datetime,
            code: res.data[0].weather.code
          },
          day2: {
            tempMax: res.data[1].max_temp,
            tempMin: res.data[1].min_temp,
            dateTime: res.data[1].datetime,
            code: res.data[1].weather.code
          },
          day3: {
            tempMax: res.data[2].max_temp,
            tempMin: res.data[2].min_temp,
            dateTime: res.data[2].datetime,
            code: res.data[2].weather.code
          },
          day4: {
            tempMax: res.data[3].max_temp,
            tempMin: res.data[3].min_temp,
            dateTime: res.data[3].datetime,
            code: res.data[3].weather.code
          },
          day5: {
            tempMax: res.data[4].max_temp,
            tempMin: res.data[4].min_temp,
            dateTime: res.data[4].datetime,
            code: res.data[4].weather.code
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
        </style>

        <Today
          temperature={this.state.temperature}
          description={this.state.description}
          date={this.state.date}
          city={this.state.city}
          code={this.state.code}
        />

        <div className="more">
          <div className="more-div">
            <NextDays
              tempMax={this.state.day1.tempMax}
              tempMin={this.state.day1.tempMin}
              dateTime="Tomorrow"
              code={this.state.day1.code}
            />
            <NextDays
              tempMax={this.state.day2.tempMax}
              tempMin={this.state.day2.tempMin}
              dateTime={this.state.day2.dateTime}
              code={this.state.day2.code}
            />
            <NextDays
              tempMax={this.state.day3.tempMax}
              tempMin={this.state.day3.tempMin}
              dateTime={this.state.day3.dateTime}
              code={this.state.day3.code}
            />
            <NextDays
              tempMax={this.state.day4.tempMax}
              tempMin={this.state.day4.tempMin}
              dateTime={this.state.day4.dateTime}
              code={this.state.day4.code}
            />
            <NextDays
              tempMax={this.state.day5.tempMax}
              tempMin={this.state.day5.tempMin}
              dateTime={this.state.day5.dateTime}
              code={this.state.day5.code}
            />
          </div>

          <h2>Today's Hightlights</h2>
          <More
            windStatus={this.state.windStatus}
            windDirection={this.state.windDirection}
            humidity={this.state.humidity}
            visibility={this.state.visibility}
            airPressure={this.state.airPressure}
          />
        </div>
      </div>
    );
  }

}

export default App;
