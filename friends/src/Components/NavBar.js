import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to="/friendsList" className='link' activeClassName="activeLink">Friends List</NavLink>
      <NavLink exact to="/login" className='link' activeClassName="activeLink">Log in</NavLink>
    </div>
  )
}

export default NavBar