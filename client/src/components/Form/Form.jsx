import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import constants from '../../constants'
import { getActivities, getCountries } from '../../redux/actions'
import './Form.css'

const Form = () => {
  /* Enviar al back activity = {
        name,
        difficulty, (en horas)
        duration,
        season,
        countries
    } */
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  const countriesToOrder = countries.map(country => {
    return {
      id: country.id,
      name: country.name
    }
  })
  const orderedCountries = countriesToOrder.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
  // console.log(orderedCountries);

  const [activity, setActivity] = useState({
    name: '',
    difficulty: 1,
    duration: 0,
    season: '',
    countries: [] // ['Argentina', 'Brazil', 'Polonia']
  })
  // console.log(activity);

  const [errors, setErrors] = useState({
    name: '',
    difficulty: '',
    duration: '',
    countries: ''
  })
  // console.log(errors);

  const [button, setButton] = useState(true)

  useEffect(() => {
    activity.name && activity.difficulty && activity.duration && activity.countries.length > 0
      ? setButton(false)
      : setButton(true)
  }, [activity])

  const validateName = (name) => {
    if (name.length < 5 || name.length > 20) {
      setErrors({
        ...errors,
        name: 'The name has to be more than 5 and less than 20 characters'
      })
    } else {
      setErrors({
        ...errors,
        name: ''
      })
    }
  }

  const validateDifficulty = (difficulty) => {
    if (difficulty < 1 || difficulty > 5) {
      setErrors({
        ...errors,
        difficulty: 'Difficulty has to be between 1 and 5'
      })
    } else {
      setErrors({
        ...errors,
        difficulty: ''
      })
    }
  }

  const validateDuration = (duration) => {
    if (duration < 1 || duration > 10) {
      setErrors({
        ...errors,
        duration: 'Duration has to be between 1 and 10hs'
      })
    } else {
      setErrors({
        ...errors,
        duration: ''
      })
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      validateName(e.target.value)
    } else if (e.target.name === 'difficulty') {
      validateDifficulty(e.target.value)
    } else if (e.target.name === 'duration') {
      validateDuration(e.target.value)
    }
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    })
  }

  const handleSelect = (e) => {
    const countryName = e.target.value
    // console.log(countryName);
    if (activity.countries.includes(countryName)) {
      alert(`${countryName} is already selected`)
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, countryName]
      })
    }
    // validateCountries(activity.countries);
  }
  console.log(activity.countries)

  const deleteCountry = (name) => {
    const filteredCountries = activity.countries.filter(country => country !== name)

    setActivity({
      ...activity,
      countries: filteredCountries
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      activity.name === '' ||
            activity.difficulty === '' ||
            activity.duration === '' ||
            activity.duration === 0 ||
            activity.countries.length < 1 ||
            errors.name !== '' ||
            errors.difficulty !== '' ||
            errors.duration !== '' ||
            errors.countries !== '') {
      alert('Please, check the fields')
      return
    }
    await axios.post(`${constants.ACTIVITIES_URL}`, activity)
    // console.log(activity);
    setActivity({
      name: '',
      difficulty: 1,
      duration: 0,
      season: '',
      countries: []
    })
    dispatch(getActivities())
    dispatch(getCountries())
    alert('Created!')
  }
  // console.log(activity.countries);

  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='formTitle'>Add an activity!</h1>
        <label>Name*</label>
        <input className='formInputs' type='text' value={activity.name} name='name' onChange={handleChange} autoComplete='off' />
        {errors.name !== '' ? <p className='danger'>{errors.name}</p> : null}
        <div className='diffDuration'>
          <div className='difficulty'>
            <label>Difficulty*</label>
            <input className='formInputs' type='number' value={activity.difficulty} name='difficulty' onChange={handleChange} min='1' max='5' />
            {errors.difficulty !== '' ? <p className='danger'>{errors.difficulty}</p> : null}
          </div>
          <div className='duration'>
            <label>Duration (in hours)*</label>
            <input className='formInputs' type='number' value={activity.duration} name='duration' onChange={handleChange} />
            {errors.duration !== '' ? <p className='danger'>{errors.duration}</p> : null}
          </div>
        </div>
        <label>Season</label>
        <select className='select formInputs' name='season' onChange={handleChange}>
          <option disabled selected>Select Season</option>
          <option value='Autumn'>Autumn</option>
          <option value='Winter'>Winter</option>
          <option value='Spring'>Spring</option>
          <option value='Summer'>Summer</option>
        </select>
        <label>Countries*</label>
        <select value='Select Countries' className='select formInputs' name='countries' onChange={handleSelect}>
          <option disabled selected>Select Countries</option>
          {orderedCountries.map(country =>
            <option value={country.name} key={country.id}>
              {country.name}
            </option>
          )}
        </select>
        {errors.countries !== '' ? <p className='danger'>{errors.countries}</p> : null}
        <p className='danger spacing'>(*) required fields</p>
        {/* {disabledButton() === true ? <button className='addBtn disabled' type='submit' disabled>Add!</button> : <button className='addBtn' type='submit'>Add!</button>} */}
        <button disabled={button} type='submit' className={button === false ? 'addBtn' : 'disabled'}>Add</button>
      </form>
      <ul className='countriesList'>
        {activity.countries.length > 0 ? activity.countries.map(country => <li className='countryItem' key={country}>• {country}<button className='deleteBtn' onClick={() => deleteCountry(country)}>X</button></li>) : null}
      </ul>
    </div>
  )
}

export default Form
