import React from 'react'
import Correct from './Correct';
import Wrong from './Wrong';

const LOGIN = () => {
    let user="sathwik";
    let password=123456;
  return (
    <div>
        <h1>{user=="sathwik" & password==123456 ? <Correct/>: <Wrong/>}</h1>
      
    </div>
  )
}

export default LOGIN
