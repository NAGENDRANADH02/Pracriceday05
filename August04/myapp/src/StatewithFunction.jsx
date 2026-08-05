import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'
const StatewithFunction = () => {
    let [count,setCount]=React.useState(0)
  return (
    <div>
        <h1>Count :{count}</h1>
        <Increment />
        <Decrement/>
        <Reset/>
         
      
    </div>
  )
}

export default StatewithFunction
