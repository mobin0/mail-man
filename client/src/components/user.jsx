


import React from "react"
import ReactDOM from 'react-dom';
import $ from 'jquery';

//To do. 
//Create input and text. 

class User extends React.Component {
  constructor ({setHandler}) {
    super()
    this.state = {setHandler}
    this.confirmHandler = this.confirmHandler.bind(this)
  }

  confirmHandler(e){
    let username = $('.user-input').val();
    this.state.setHandler(username)
  }
  render() {
    return (
   <div className = "user-overlay">
        <div className = "user-container">
        <span className = "user-input-container"> <input className="user-input" type="text" placeholder="Enter username here"></input> </span>
        <span> <button className = "user-button" type ="submit" onClick = {this.confirmHandler}>Confirm</button></span>
      </div>
    </div> 

    )
  }
}
export default User; 