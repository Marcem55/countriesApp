import React from 'react';
import Card from '../Card/Card';

const Cards = ({countries}) => {
    return (
        <section>
            {countries?.map(country => 
                <Card key={country.id} id={country.id} name={country.name} image={country.image} continent={country.continent}/>
            )}
        </section>
    )
}

export default Cards;