import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { signin } from '../api/auth';


export const Signin = ()=>{
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const emailRef = useRef()
    const pwRef = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value
        const password = pwRef.current.value
        signin({email,password}).then(()=>{
            localStorage.setItem('isLoggedIn',true)
            navigate('/home')
        }).catch(()=>{
            setError('Wrong email or password')
        })
    }

    return(
        <div id="signin-page">
            <h1>Sign in page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' ref={emailRef} required/>
                <br />
                <input type="password" placeholder='password' ref={pwRef} required/>
                <br />
                <button type='submit'>Sign in</button>
            </form>
            <div className='error-txt'>{error}</div>
        </div>
    )
}
