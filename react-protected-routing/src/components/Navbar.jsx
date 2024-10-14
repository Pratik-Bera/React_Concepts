import React from 'react'
import {NavLink , Outlet} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="navbar">
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li> 
    </ul>

    </header>
    <Outlet/>
    </>
  )
}

export default Navbar
