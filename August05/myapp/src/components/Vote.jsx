import React from 'react'
import Eligible from './Eligible'
import NotEligible from './NotEligible'

const Vote = () => {
    let age=32
  return (
    <div>
        <h1>{age>=18? <Eligible/>: <NotEligible/>}</h1>
      
    </div>
  )
}

export default Vote
