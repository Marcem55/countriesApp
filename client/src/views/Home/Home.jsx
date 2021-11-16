import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import NavBar from '../../components/NavBar/NavBar';
import SearchAndFilterBar from '../../components/Search&FilterBar/SearchAndFilterBar';

const Home = () => {
    const countries = useSelector(state => state.countries);
    // console.log(countries);

    return (
        <div className='home'>
            <NavBar />
            <SearchAndFilterBar />
            <Cards countries={countries} />
        </div>
    )
}

export default Home;