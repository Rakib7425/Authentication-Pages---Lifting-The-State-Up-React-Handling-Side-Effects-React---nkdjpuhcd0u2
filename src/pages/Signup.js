import React,{useRef} from 'react';
import { useNavigate } from 'react-router';
import { signup } from '../api/auth';

export const Signup = () =>{
    const navigate = useNavigate()
    const emailRef = useRef()
    const pwRef = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value
        const password = pwRef.current.value
        console.log(email,password);
        signup({email,password}).then(a=>navigate('/signin')).catch(c=>console.log(c))
    }
    
    return(
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' ref={emailRef} required/>
                <br />
                <input type="password" placeholder='password' ref={pwRef} required/>
                <br />
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
