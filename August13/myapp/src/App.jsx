import React, { useState } from 'react'
import Form from './components/Form'
import DisplayForm from './components/DisplayForm'
const App = () => {
    let[user,setUser]=useState(null);
    let updatedetailes=(data)=>{
        setUser(data)
    }
    console.log(user)
  return (
    <div>
        <Form updatedetailes={updatedetailes}/>
        {user !==null && (
            <DisplayForm user={user}/>

        )}
      
    </div>
  )
}

export default App
