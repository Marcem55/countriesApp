import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import constants from '../../constants';
import { getActivities } from '../../redux/actions';
import './CreateActivity.css';

const CreateActivity = () => {
    /* Enviar al back activity = {
        name,
        difficulty, (en horas)
        duration,
        season,
        countries
    } */
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    
    const countriesToOrder = countries.map(country => {
        return {
            id: country.id,
            name: country.name
        }
    });
    const orderedCountries = countriesToOrder.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    // console.log(orderedCountries);

    const [activity, setActivity] = useState({
        name: '',
        difficulty: 1,
        duration: 1,
        season: '',
        countries: [] // ['Argentina', 'Brazil', 'Polonia']
    });

    const handleChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        // Hacer un push de cada value a mi array de countries
        const countryName = e.target.value;
        // console.log(countryId);
        setActivity({
            ...activity,
            countries: [...activity.countries, countryName]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${constants.ACTIVITIES_URL}`, activity);
        // console.log(activity);
        setActivity({
            name: '',
            difficulty: 1,
            duration: 1,
            season: '',
            countries: []
        });
        dispatch(getActivities());
    }

    return (
        <>
            <NavBar />
            <div className='formContainer'>
                <h1>Add an activity!</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <label>Name*</label>
                    <input type="text" value={activity.name} name='name' onChange={handleChange}/>
                    <label>Difficulty*</label>
                    <input type="number" value={activity.difficulty} name='difficulty' onChange={handleChange} min='1' max='5'/>
                    <label>Duration (in hours)*</label>
                    <input type="number" value={activity.duration} name='duration' onChange={handleChange}/>
                    <label>Season</label>
                    <select name="season" onChange={handleChange}>
                        <option defaultValue disabled selected>Select Season</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                        <option value='Summer'>Summer</option>
                    </select>
                    <label>Countries*</label>
                    <select name="countries" onChange={handleSelect}>
                        <option defaultValue disabled selected>Select Countries</option>
                        {orderedCountries.map(country => 
                            <option value={country.name} key={country.id}>
                                {country.name}
                            </option>
                        )}
                    </select>
                    <button type='submit'>Add!</button>
                </form>
            </div>
        </>
    )
}

export default CreateActivity;
