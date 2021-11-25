import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderByName, filterActivity, filterContinent, getCountriesByName, resetFilters } from '../../redux/actions'
import './SearchAndFilterBar.css'

const SearchAndFilterBar = () => {
  const dispatch = useDispatch()

  const activities = useSelector(state => state.activities)
  const [country, setCountry] = useState('')

  const handleChange = (e) => {
    setCountry(e.target.value)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getCountriesByName(country))
    setCountry('')
    resetSelectsFilters()
  }

  const handleContinentFilter = (e) => {
    dispatch(filterContinent(e.target.value))
    document.getElementById('selectActivity').value = 'defaultValue'
    document.getElementById('selectOrder').value = 'defaultValue'
  }

  const handleActivityFilter = (e) => {
    dispatch(filterActivity(e.target.value))
    document.getElementById('selectContinent').value = 'defaultValue'
  }

  const handleOrders = (e) => {
    dispatch(orderByName(e.target.value))
  }

  const onClick = () => {
    dispatch(resetFilters())
    // Falta hacer que los inputs vuelvan a su value inicial y que se reinicie el order
    resetSelectsFilters()
  }

  // Funcion para resetear los values de los selects
  const resetSelectsFilters = () => {
    document.getElementById('selectContinent').value = 'defaultValue'
    document.getElementById('selectActivity').value = 'defaultValue'
    document.getElementById('selectOrder').value = 'defaultValue'
  }

  return (
    <div className='searchBarContainer'>
      <div>
        <form className='searchContainer' onSubmit={handleSubmit}>
          <label className='loupe'><img className='icon' src='https://img.icons8.com/material-rounded/24/000000/search.png' alt='loupe' /></label>
          <input className='search' type='text' value={country} placeholder='Search Countries...' onChange={handleChange} />
        </form>
      </div>
      <div className='filterContainer'>
        <label className='filter'><img className='icon' src='https://img.icons8.com/material-rounded/24/000000/sorting-options.png' alt='filter' /></label>
        <select id='selectContinent' className='selectFilters' name='filters' onChange={handleContinentFilter}>
          <option value='defaultValue' disabled selected hidden>Filter By Continent</option>
          <option value='All'>All</option>
          <option value='North America'>North America</option>
          <option value='South America'>South America</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Europe'>Europe</option>
          <option value='Africa'>Africa</option>
          <option value='Asia'>Asia</option>
          <option value='Oceania'>Oceania</option>
        </select>
        <p className='or'>Or</p>
        <select id='selectActivity' className='selectFilters' name='filters' onChange={handleActivityFilter}>
          <option value='defaultValue' disabled selected hidden>Filter By Activity</option>
          <option value='All'>All</option>
          {activities.length > 0
            ? activities.map(a => {
                return (
                  <option key={a.id} value={a.name}>{a.name}</option>
                )
              })
            : <option disabled>No activities</option>}
        </select>
        <label className='order'><img className='icon' src='https://img.icons8.com/material-sharp/24/000000/sort.png' alt='order' /></label>
        <select id='selectOrder' name='orders' onChange={handleOrders}>
          <optgroup label='By Name'>
            <option value='defaultValue' disabled selected hidden>Order</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </optgroup>
          <optgroup label='By Population'>
            <option value='More'>More</option>
            <option value='Less'>Less</option>
          </optgroup>
        </select>
      </div>
      <div className='btnContainer'>
        <button className='btn' onClick={onClick}>Reset Filters</button>
      </div>
    </div>
  )
}

export default SearchAndFilterBar
