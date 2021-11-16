import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className='navContainer'>
        <ul>
          <li>
            <Link className='navLinks' to='/'><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-earth-space-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/></Link>
          </li>
          <li>
            <Link className='navLinks' to='/home'>HOME</Link>
          </li>
          <li>
            <Link className='navLinks' to='/addActivity'>CREATE ACTIVITY</Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar;
