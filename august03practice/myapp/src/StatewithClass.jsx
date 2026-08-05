import React, { Component } from 'react'

export default class StatewithClass extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div>
        <h2>counnt :{this.state.count}</h2>
        <button onClick={()=>{this.setState({count: this.state.count+1})}}> Increase</button>
        <button onCanPlay={()=>{this.setState}}></button>
        
      </div>
    )
  }
}
