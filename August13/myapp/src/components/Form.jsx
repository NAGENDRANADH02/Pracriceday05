import React from 'react'
import { useRef } from 'react'
const Form = ({updatedetailes}) => {
    let name = useRef()
    let email = useRef()
    let handleSubmit = (e) => {
        e.preventDefault()
        let detailes={
            name:name.current.value,
            email:email.current.value
        }
        console.log(detailes)
        updatedetailes(detailes)

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="">Name</label>
                <input type="text" ref={name} /><br />
                <label htmlFor="">Email</label>
                <input type="text"  ref={email}/><br />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Form
