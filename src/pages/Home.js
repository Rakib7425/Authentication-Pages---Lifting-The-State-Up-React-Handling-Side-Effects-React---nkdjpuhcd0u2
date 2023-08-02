import React from 'react';
import { Navigate, useNavigate } from 'react-router';

export const Home = () =>{
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const navigate = useNavigate()
    if(!isLoggedIn || isLoggedIn != 'true') return <Navigate to='/signin' />
    const handleLogout = ()=>{
        localStorage.removeItem('isLoggedIn')
        navigate('/signin')
    }
    
    return(
        <div id="home-page">
            Home page
            <button onClick={handleLogout} id="logout-btn">Logout</button>
        </div>
    )
}
