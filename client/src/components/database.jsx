


import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import faker from 'faker'

//To do. 
//Create input and text. 

class Database extends React.Component {
  constructor ({data, dataUpdater}) {
    super()
    if(data){
      this.state = {data: data, text: JSON.stringify(data), dataUpdater: dataUpdater}
    } else {
        this.state = {data:null, text:null, dataUpdater: dataUpdater}
    }
    console.log("DATABASE STATE", this.state)
    console.log(this.state.text)
  }

componentDidMount(){
    if(!this.state.data){

        this.state.dataUpdater(this.setState.bind(this))
        console.log(this.state.data)
    }
}
  
  render() {
    // console.log(this.state, "EY WTF")
    return (
        <div className = "database-container">
            <div className = "current-queries">
            {this.d}
            </div>
        </div>

    )
  }
}
export default Database; 