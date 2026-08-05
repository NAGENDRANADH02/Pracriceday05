import React, { Component } from 'react'
import StatewithClass from './StatewithClass'
export default class Product extends Component {
    arr=[{name:"iphone",price:"145000",description:"this is a good iphone",rating:"*****"}]
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.price}</h2>
        <p>{this.props.description}</p>
        <h4>{this.props.rating}</h4>
        <StatewithClass/>
      </div>
    )
  }
}
