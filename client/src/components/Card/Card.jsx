import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({name, image, continent, id}) => {
    return (
        <div>
            <Link to={`/country/${id}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{continent}</p>
            </Link>
        </div>
    )
}

export default Card;