import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = ({ countries }) => {
  return (
    <section className='cardsContainer'>
      {countries?.map(country =>
        <Card key={country.id} id={country.id} name={country.name} image={country.image} continent={country.continent} />
      )}
    </section>
  )
}

export default Cards
