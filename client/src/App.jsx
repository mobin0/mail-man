
import React from "react"
import Frame from './components/frame.jsx'
import User from './components/user.jsx'
import Database from './components/database.jsx'
import _ from "lodash"
import $ from 'jquery'

class App extends React.Component {
  constructor() {
    super()
    this.state = {username: null, dataUpdated: false, data: null}
    this.setHandler = this.setHandler.bind(this)
    this.getState = this.getState.bind(this)
    this.stateUpdate = this.stateUpdate.bind(this)
    this.setData = this.setData.bind(this)
    this.updateData = this.updateData.bind(this)

    console.log('state', this.state)
  }
  

  setHandler(username){
    this.setState((prevState, props)=>{
      return {username} })
    this.setData(username)
    console.log(this.getState('data'), "DataUpdated?")
    return this.getState('username')
  }

  getState(name){
    let result = ''
    this.setState((prevState, props)=>{
      result = prevState[name] || result
     return {} })

     return result
  }

  setData(username){
     $.get(`http://localhost:4321/api/${username}`, (res,req) => {
          console.log("res",res)
          let array = []
          this.setState({data: JSON.stringify(res), dataUpdated: true})
          console.log("UPDATED STATE?", this.state)
      })

  
  }

  updateData(stateSetter) {
    this.setState((p,e) => {
      // console.log('WTTTTF', p)
      return {}
    })
    stateSetter((prevState, props) => 
    {
      
      console.log(prevState, "prevStateandData", this.state.data)

    return {data: this.state.data}
    })
    return this.state.data
  }



  stateUpdate(stateSetter) {
    stateSetter((prevState, props) => ({data: this.data}))
  }

  // componentDidMount(){
  // }
  render() {
    return (
      <div className = "app-container">
        <div className={this.state.username ? "hide-overlay":"overlay"}>  <div> <User setHandler = {this.setHandler}/> </div></div>
          <div className= "frame-container">
              <Frame />
        </div>
        <div className = {this.state.data ? "database-container" : "database-container-hide"}> 
          <Database data= {this.state.data} dataUpdater = {this.updateData}/>     
          </div>
      </div>

    )
  }
}

export default App;