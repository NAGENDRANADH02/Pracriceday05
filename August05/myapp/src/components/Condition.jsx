import React, { useState } from 'react'
import Pass from './Pass'
import Fail from './Fail'
const Condition = () => {
    let score=78
  return (
    <div>
      <h1>{score>=35?<Pass/>:<Fail/>}</h1>
    </div>
  )
}

export default Condition
