import React, { useState } from 'react'
import Form from './components/Form'
import DisplayForm from './components/DisplayForm';
const App = () => {
    let[User,setUser]=useState(null);
    let handleUserDetailes=(data)=>{
        setUser(data)
    }
  return (
    <div>
      <Form handleUserDetailes={handleUserDetailes}/>
      <DisplayForm User={User}/>
    </div>
  )
}

export default App
