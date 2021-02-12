// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
    constructor() {
      super();
  
      // Define the initial state:
      this.state = {
        hasBeenClicked: false
      }
      
    }
  
    handleClick = () => {
      // Update our state here...
      this.setState(previousState =>{
          console.log(previousState)
          return{
              hasBeenClicked:!previousState.hasBeenClicked
          }

      })
    }
  
    render() {
      return (
        <div>
        <p>{this.state.color}</p>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
  
  export default ClickityClick;