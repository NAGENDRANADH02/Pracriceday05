import React, { Component } from 'react'

export default class RefwithClass extends Component {
    constructor(){
        super();
        this.inputRef=React.createRef();
        this.display=()=>{
            console.log(this.inputRef.current.value);
        }
        this.focushere=React.createRef();
        this.focusInput=()=>{
            this.focushere.current.focus();
            this.focushere.current.style.backgroundColor="red";

        }

    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.display}>Submit</button>
        <input type="text" ref={this.focushere} />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    )
  }
}
