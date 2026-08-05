import React from 'react'
import StatewithFunction from './StatewithFunction'

const Increment = () => {
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
      
    </div>
  )
}

export default Increment
