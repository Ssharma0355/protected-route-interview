import './App.css';
import { Router,Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './Component/NavBar';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import About from './Pages/About';
import Login from './Pages/Login';
import { ProtectedRoute } from './Utils/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ProtectedRoute Component={<Home />} />} />

          <Route path="/contactus" element={<Contactus />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
