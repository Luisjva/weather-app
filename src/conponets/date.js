import { Component } from "react"

class DateTime extends Component {
  constructor(props){
    super(props)
    this.bestDate = this.bestDate.bind(this)
  }

  bestDate() {
    let point1 = this.props.date.indexOf("-") ,
        point2 = this.props.date.indexOf(-1, "-"),
        months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        days = ["Thurs","Fri","Sat","Sun","Mon","Tues","Web"],
        day = this.props.date.slice(point2+1, point2+3),
        month = this.props.date.slice(point1+1, point1+3),
        year = this.props.date.slice(0, point1),
        date = new Date(year, month, day)
    
    if(this.props.date === "Tomorrow") {
      return "Tomorrow"
    }else{
      let weekNumber = date.getDay(),
          monthNumber = date.getMonth()	
      console.log(weekNumber, monthNumber, date)
      
      return `${days[weekNumber]}, ${date.getDate()} ${months[monthNumber-1]}`
    } 

    


  }

  render() {
    return(
      <span>{this.bestDate()}</span>
    )
  }
}

export default DateTime