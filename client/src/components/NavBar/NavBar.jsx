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
            <Link onClick={onClick} className='navLinks' to='/home'><img src="https://img.icons8.com/fluency-systems-regular/48/000000/home.png" alt='home'/></Link>
          </li>
          <li className='noScroll'>
            <Link className='navLinks addAct' to='/addActivity'><img className='add' src="https://img.icons8.com/material-outlined/24/000000/add.png" alt='add'/> Activity</Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar;
