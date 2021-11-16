import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landing'>
            <h1 className='landingTitle'>Welcome to CountriesApp</h1>
            <Link className='link' to='/home'>Go to Home</Link>
        </div>
    )
}

export default LandingPage;