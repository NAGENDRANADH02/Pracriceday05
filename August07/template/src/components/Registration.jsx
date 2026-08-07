import React, { Component } from 'react'
import InputComponent from './InputComponent';
export default class Registration extends Component {
    constructor(){
        super();
        this.firstName=React.createRef();
        this.LastName=React.createRef();
        this.age=React.createRef();
        this.phone=React.createRef();
        this.address=React.createRef();
        this.displayInput=()=>{
            console.log(this.firstName.current.value);
            console.log(this.LastName.current.value);
            console.log(this.age.current.value);
            console.log(this.phone.current.value);
            console.log(this.address.current.value);
        }
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='FirstName' ref={this.firstName} />
        <input type="text" placeholder='Lastname' ref={this.LastName} />
        <input type="text" placeholder='age' ref={this.age} />
        <input type="text" placeholder='phonenumber' ref={this.phone} />
        <input type="text"  placeholder='address' ref={this.address} />
        <button onClick={this.displayInput}>Submit</button>        
      </div>
    )
  }
}
