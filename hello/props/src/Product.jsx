import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <h3>{this.props.price}</h3>
        <h4>{this.props.rating}</h4>
        <button>Add to cart</button>
      </div>
    )
  }
}
