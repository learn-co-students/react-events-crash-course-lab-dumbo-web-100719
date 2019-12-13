import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let xAxis = event.clientX
    let yAxis = event.clientY
   drawChromeBoiAtCoords(xAxis,yAxis)

    // console.log(event)
    // debugger
  }
  
  handleClick = () => {
    /* TODO: Create an event handler which, when fired, invokes the provided
     * `toggleCycling` function with no arguments. Don't forget the click event
     * listener that should fire it!
     */
    toggleCycling()
    console.log(toggleCycling)
  }
  
  handleKeyDown = (event) => {
    // resize()
    let pressedKey = event.key
    console.log(event)
    if (pressedKey === 'a') {
      resize('+')
      //  block of code to be executed if condition1 is true
    } else if (pressedKey === 's') {
      resize('-')
      
    } else {
      
    }
   
    /* TODO: Add an event listener to the `<canvas>` element to capture when a key
    /* is pressed. When a key is pressed, an event handler should invoke the the
    /* provided `resize` function with a single argument of either '+' or '-'
    /* if the key pressed was 'a', then it should call `resize` with '+'
    /* if the key pressed was 's', then it should call `resize` with '-' 
     */
  }
  
   
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
