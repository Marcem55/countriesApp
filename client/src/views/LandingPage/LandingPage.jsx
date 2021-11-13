import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <p>LANDING PAGE</p>
            <Link to='/home'>Go to Home</Link>
        </div>
    )
}

export default LandingPage;