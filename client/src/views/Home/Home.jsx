import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';

const Home = () => {
    const countries = useSelector(state => state.countries)

    return (
        <div>
            <p>SOY LA HOME</p>
            <Cards countries={countries} />
        </div>
    )
}

export default Home;