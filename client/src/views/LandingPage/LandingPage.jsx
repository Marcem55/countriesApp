import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landing'>
            <h1 className='landingTitle'>Welcome to World Tour</h1>
            <p className='aboutText'>Find information about all countries and create tourist activities for them!</p>
            <Link className='link' to='/home'>Go to Home</Link>
        </div>
    )
}

export default LandingPage;