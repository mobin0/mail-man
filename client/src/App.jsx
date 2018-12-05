
import React from "react"
import Frame from './components/frame.jsx'
import _ from "lodash"

class App extends React.Component {
  constructor() {
    super();
    console.log(Frame)
  }

  // componentDidMount(){
  // }
  render() {
    return (
        <div className= "frame-container">
            <Frame />
      </div>
    )
  }
}

export default App;