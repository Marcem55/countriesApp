import React from 'react';

const Card = ({name, image, continent}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{continent}</p>
        </div>
    )
}

export default Card;