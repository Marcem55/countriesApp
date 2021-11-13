import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
    const countries = useSelector(state => state.countries)

    return (
        <div>
            <NavBar />
            <Cards countries={countries} />
        </div>
    )
}

export default Home;