import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Logo">
        <Link className="links" to="/">
          Logo
        </Link>
      </div>
      <div className="Nav-link">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About us
        </Link>
        <Link className="links" to="/contactus">
          Contact us
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar
