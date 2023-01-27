import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material'
// import { useNavigate } from "react-router-dom";


import axios from 'axios'





const baseUrl = "http://localhost:4000"
const Index = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')


    const signupHandler = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(`${baseUrl}/signup`, {
                firstName: name,
                lastName: name,
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            setResult("signup successfull")
        } catch (e) {
            console.log("e: ", e)
        }
    }
    return (
        <>
            <div className=''>

                <h1>Signup Here.</h1>
                <form action="" onSubmit={signupHandler}>
                    <TextField id="userName" name='userName' label="Enter Your Name" type="username" variant="outlined" onChange={(e) => setName(e.target.value)} />
                    <br />
                    <br />
                    <TextField id="email" name='email' label="Enter Your Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="psw" name='password' label="Enter Your Passsword" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                    <br /><br /><br />
                    <Button variant="contained" type='submit'>Login</Button>
                </form>

                <p>{result}</p>
            </div>
        </>
    )
}

export default Index