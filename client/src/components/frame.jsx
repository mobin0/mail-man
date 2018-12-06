


import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';

//To do. 
//Create input and text. 

class Frame extends React.Component {
  constructor ({username}) {
    super({username})
    this.state = {username: username}
    this.submit = this.submit.bind(this)
  }

  submit(e){
    let search = $('.api-input').val();
       let cb = (data) => {
      this.setState({'data': data});
      console.log(data)
    }
    $.get(`${search}`, cb)
    this.saveData()
  }

  saveData(){
    let username = this.state.username;
    // $.post(`http://localhost:4321/api/${username}/`, (r)=> {
    //   console.log()
    // }
  }

  render() {
    return (
   <div className = "frame-container">
      <span className = "instr-text">API Request:</span>
      <span className = "api-input-container"> <input className="api-input" type="text" placeholder="Enter API here"></input> </span>
      <span> <button className = "frame-button" type ="submit" onClick = {this.submit}>Submit</button></span>
      <span className = "result">{this.state.data ? `${this.state.data}` :''} </span>  
    </div> 

    )
  }
}
export default Frame; 