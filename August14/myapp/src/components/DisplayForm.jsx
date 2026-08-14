import React from 'react'

const DisplayForm = ({ User }) => {

    if (!User) {
        return <h2>No user details submitted yet.</h2>
    }

    return (
        <div>
            <h1>Name: {User.Name}</h1>
            <p>Email: {User.Email}</p>
            <p>Age: {User.Age}</p>
            <p>Phone: {User.Phone}</p>
            <p>Address: {User.Add}</p>
        </div>
    )
}

export default DisplayForm