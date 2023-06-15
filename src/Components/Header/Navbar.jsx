import React from 'react'
import logo from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'> 
    <NavLink to ="/Kasa"><img src={logo} atl='Kasa' /></NavLink>
        <ul className='menu'>
          <NavLink to ="/Kasa" className={({isActive})=> isActive ? "isActive":""}><li className='nav' >Acceuil</li></NavLink>
          <NavLink to ="/apropos" className={({isActive})=> isActive ? "isActive":""}><li className='nav' >A propos</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar