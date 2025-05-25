import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const logout =()=>{
        let logOut = localStorage.removeItem("login",true)
        if (!logOut){
        navigate("/login");
        } 
        
    }
  return (
    <div>
      <h1>Home</h1>

      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home
