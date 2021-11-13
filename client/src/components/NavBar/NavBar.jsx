import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className='navContainer'>
        <ul>
          <li>
            <Link to='/'>LOGO</Link>
          </li>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/addActivity'>CREATE ACTIVITY</Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar;
