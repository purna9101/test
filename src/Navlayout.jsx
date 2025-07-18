import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
export default function Navlayout() {
  return (
   <>
      <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/a1">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav> */}
      <Navbar/>
        <Outlet /> 
      
    </div>  
    </>
  )
}
