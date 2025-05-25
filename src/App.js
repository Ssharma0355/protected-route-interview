import './App.css';
import { Router,Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './Component/NavBar';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import About from './Pages/About';
import Login from './Pages/Login';
import { ProtectedRoute } from './Utils/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state)=>state.counter.value); //we have taken the value from store by using useSelector
  const dispatch = useDispatch();
   const handleIncrement = () => {
 //to execute the action inside slice we have to dispatch the action from here
   dispatch(increment());
   };
  const handleDecrement=()=>{
    dispatch(decrement());
  }
 
  return (
    <div>
      <div>
        {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoute Component={<Home />} />} />

          <Route path="/contactus" element={<Contactus />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter> */}
      </div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment +</button>
      <button onClick={handleDecrement}>Decrement -</button>
    </div>
  );
}

export default App;
