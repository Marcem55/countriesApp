import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContinent } from '../../redux/actions';
import './SearchAndFilterBar.css';

const SearchAndFilterBar = () => {
    const dispatch = useDispatch();

    const activities = useSelector(state => state.activities);

    const handleFilters = (e) => {
        const continent = e.target.value;
        dispatch(filterContinent(continent));
    }

    const handleOrders = (e) => {

    }

    return (
        <div className='searchBarContainer'>
            <div className='searchContainer'>
                <label className='loupe'><img className='icon' src="https://img.icons8.com/material-rounded/24/000000/search.png"/></label>
                <input className='search' type="search" placeholder='Search Countries...'/>
            </div>
            <div className='filterContainer'>
                <label className='filter'><img className='icon' src="https://img.icons8.com/material-rounded/24/000000/sorting-options.png"/></label>
                <select className='selectFilters' name="filters" onChange={handleFilters}>
                    <optgroup label='By Continent'>
                        <option defaultValue disabled selected hidden>Filter</option>
                        <option value="All">All</option>
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
                <label className='order'><img className='icon' src="https://img.icons8.com/material-sharp/24/000000/sort.png"/></label>
                <select name="orders" onChange={handleOrders}>
                <optgroup label='By Name'>
                        <option defaultValue disabled selected hidden>Order</option>
                        <option value="ASC">A-Z</option>
                        <option value="DES">Z-A</option>
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
