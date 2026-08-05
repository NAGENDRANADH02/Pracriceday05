import React, { Component } from 'react'
import Alpha from './Alpha'

export default class Beta extends Component {
  render() {
    return (
      <div>
        <Alpha id={12}/>
        <h2>Hello i am a Beta component and my id is {this.props.id2}</h2>
      </div>
    )
  }
}
