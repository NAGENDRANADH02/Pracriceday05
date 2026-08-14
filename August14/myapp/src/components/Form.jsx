import React, { useState } from 'react'

const Form = ({handleUserDetailes}) => {
    let [UserName,setUserName]=useState("");
    let handleUserName=e=>{
        console.log(UserName);
        setUserName(e.target.value);
    }
    
    let [UserAge,setUserAge]=useState("");
    let handleUserAge=e=>{
        console.log(UserAge);
        setUserAge(e.target.value);
    }
    
    let [UserEmail,setUserEmail]=useState("");
    let handleUserEmail=e=>{
        console.log(UserEmail);
        setUserEmail(e.target.value);
    }
   
    let [UserPhone,setPhone]=useState("");
    let handleUserPhone=e=>{
        console.log(UserPhone);
        setPhone(e.target.value);
    }
    
    let [UserAdd,setUserAdd]=useState("");
    let handleUserAdd=e=>{
        console.log(UserAdd);
        setUserAdd(e.target.value);
    }
    let handleSubmit=e=>{
        e.preventDefault()
        let detailes={
            Name: UserName,
            Email:UserEmail,
            Age:UserAge,
            Phone:UserPhone,
            Add:UserAdd,

        }
        handleUserDetailes(detailes);
        setPhone("");
        setUserAdd("");
        setUserAge("");
        setUserEmail("");
        setUserName("");
        
    }
    
   
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" value={UserName} onChange={handleUserName}/><br />
        <label htmlFor="">Email</label>
        <input type="text" value={UserEmail} onChange={handleUserEmail}/><br />
        <label htmlFor="">Age</label>
        <input type="text" value={UserAge} onChange={handleUserAge}/><br />
        <label htmlFor="">Mobile Number</label>
        <input type="text" value={UserPhone} onChange={handleUserPhone}/><br />
        <label htmlFor="">Address</label>
        <input type="text"  value={UserAdd} onChange={handleUserAdd}/><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
