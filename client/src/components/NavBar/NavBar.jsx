import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFilters } from '../../redux/actions';
import './NavBar.css';


const NavBar = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetFilters());
  }
  
    return (
        <nav className='navContainer'>
        <ul>
          <li>
            <Link className='navLinks' to='/'><img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-earth-space-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt='earth'/></Link>
          </li>
          <li>
            <Link onClick={onClick} className='navLinks' to='/home'>HOME</Link>
          </li>
          <li>
            <Link className='navLinks' to='/addActivity'>CREATE ACTIVITY</Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar;
