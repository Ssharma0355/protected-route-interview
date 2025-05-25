import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const peoples = [
        {name:"Sachin",age:25,isWorking:true},
        {name:"Rahul",age:30,isWorking:false},
        {name:"Virat",age:28,isWorking:true},
]
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
      <ul>
        {/* {peoples.map((p,index)=>(
            <li key={index}>
                {p.name}
                <br></br>
                {p.age} 
                {p.isWorking ? " is working" : " not working"}    
                </li>
        ))} */}
        {peoples.filter((p)=>p.isWorking).map((p,index)=>(
            <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home
