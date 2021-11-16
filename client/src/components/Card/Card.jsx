import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({name, image, continent, id}) => {
    return (
        <div>
            <Link className='cardContainer' to={`/country/${id}`}>
            <img className='cardImg' src={image} alt={name} />
            <h3 className='cardTitle' >{name}</h3>
            <p className='cardContinent'>{continent}</p>
            </Link>
        </div>
    )
}

export default Card;