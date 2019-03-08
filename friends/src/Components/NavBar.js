import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink exact to="/" className='link' activeClassName="activeLink">Log in</NavLink>
    </div>
  )
}

export default NavBar