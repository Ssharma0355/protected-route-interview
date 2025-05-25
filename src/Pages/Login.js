import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const handleLogin =()=>{
        localStorage.setItem("login", true)
        navigate('/');
    }
    useEffect(()=>{
        let login = localStorage.getItem("login")
        if(login){
            navigate("/")
        }
    })
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login </button>
      
    </div>
  )
}

export default Login
