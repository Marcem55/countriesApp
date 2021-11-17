import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByName, filterActivity, filterContinent, orderByPopulation, getCountriesByName } from '../../redux/actions';
import './SearchAndFilterBar.css';

const SearchAndFilterBar = () => {
    const dispatch = useDispatch();

    const activities = useSelector(state => state.activities);
    const [country, setCountry] = useState('');


    const handleChange = (e) => {
        setCountry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(country));
        setCountry('');
    }

    const handleFilters = (e) => {
        dispatch(filterContinent(e.target.value));
        // dispatch(filterActivity(e.target.value));
        console.log();
    }

    const handleOrders = (e) => {
        dispatch(orderByName(e.target.value));
        dispatch(orderByPopulation(e.target.value));
    }

    return (
        <div className='searchBarContainer'>
            <div>
                <form className='searchContainer' onSubmit={handleSubmit}>
                    <label className='loupe'><img className='icon' src="https://img.icons8.com/material-rounded/24/000000/search.png" alt='loupe'/></label>
                    <input className='search' type="text" value={country} placeholder='Search Countries...' onChange={handleChange}/>
                </form>
            </div>
            <div className='filterContainer'>
                <label className='filter'><img className='icon' src="https://img.icons8.com/material-rounded/24/000000/sorting-options.png" alt='filter'/></label>
                <select className='selectFilters' name="filters" onChange={handleFilters}>
                        <option value="All">All</option>
                    <optgroup label='By Continent'>
                        <option defaultValue disabled selected hidden>Filter</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </optgroup>
                    <optgroup label='By Activity'>
                        {activities.length > 0 ? activities.map(a => {
                            return (
                                <option key={a.id} value={a.name}>{a.name}</option>
                            )
                        })
                        : <option disabled>No activities</option>}
                    </optgroup>
                </select>
                <label className='order'><img className='icon' src="https://img.icons8.com/material-sharp/24/000000/sort.png" alt='order'/></label>
                <select name="orders" onChange={handleOrders}>
                <optgroup label='By Name'>
                        <option defaultValue disabled selected hidden>Order</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </optgroup>
                    <optgroup label='By Population'>
                        <option value="More">More</option>
                        <option value="Less">Less</option>
                    </optgroup>
                </select>
            </div>
            <div className='btnContainer'>
                <button className='btn'>Reset Filters</button>
            </div>
        </div>
    )
}

export default SearchAndFilterBar;
