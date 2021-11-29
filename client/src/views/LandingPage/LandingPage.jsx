import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing'>
      <h1 className='landingTitle animate__animated animate__backInDown'>Welcome to World Tour</h1>
      <p className='aboutText animate__animated animate__backInUp'>Find information about all countries and create tourist activities for them!</p>
      <Link className='link animate__animated animate__flipInY' to='/home'>Go to Home</Link>
    </div>
  )
}

export default LandingPage
