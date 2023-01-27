import React,{useState} from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material'
// import { useNavigate } from "react-router-dom";
import axios from 'axios'



const Index = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState('')

    const baseUrl = "http://localhost:4000"

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(`${baseUrl}/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            setResult("login successfull")
        } catch (e) {
            console.log("e: ", e)
        }
    }

    return (
        <>
            <div className=''>


                <h1>Log in by typing your email & password.</h1>
                <form action="" onSubmit={loginHandler}>
                    <TextField id="email" label="Enter Your Email" type="email" variant="outlined"  name ='email' onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="psw" label="Enter Your Passsword" type="password" variant="outlined" name ='password' onChange={(e) => setPassword(e.target.value)} />
                    <br /><br /><br />
                    <Button variant="contained" type='submit'>Login</Button>
                </form>
            </div>
            <p>{result}</p>

        </>
    )
}

export default Index