import React, { Component } from 'react'

export default class StatewithClass extends Component {
    constructor(){
        super()
        this.state={
            Add:2
        }
    }
  render() {
    return (
      <div>
        <h3> Add to cart:{this.state.Add}</h3>
        <button onClick={()=>{this.setState({Add: this.state.Add**2})}}> Increment</button>
        <button onClick={()=>{this.setState({Add: this.state.Add/2})}}> Decrement</button>
        <button onClick={()=>{this.setState({Add:2})}}> Reset</button>
        
      </div>
    )
  }
}
