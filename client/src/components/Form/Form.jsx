import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities, getCountries } from '../../redux/actions'
import './Form.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
require('dotenv').config()

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
  const activities = useSelector(state => state.activities)
  // console.log(activities)

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
  // console.log(activity)

  const [errors, setErrors] = useState({
    name: '',
    difficulty: '',
    duration: ''
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

  const onClickCountry = (e) => {
    const countryName = document.getElementById('selectCountries').value

    e.preventDefault()
    if (countryName === 'defaultValue') {
      toast.warn('Please select a country', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }
    if (activity.countries.includes(countryName)) {
      toast.warn(`${countryName} is already selected`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, countryName]
      })
    }
  }

  const deleteCountry = (name) => {
    const filteredCountries = activity.countries.filter(country => country !== name)

    setActivity({
      ...activity,
      countries: filteredCountries
    })
  }

  const resetSelects = () => {
    document.getElementById('selectSeason').value = 'defaultValue'
    document.getElementById('selectCountries').value = 'defaultValue'
  }

  // FALTA HACER QUE SI ES EL MISMO NOMBRE DE ACTIVIDAD, LE SUME LOS PAISES NUEVOS
  const validateActivity = (name) => {
    const actToValidate = activities.filter(act => act.name.toLowerCase() === name.toLowerCase())
    console.log(actToValidate)
    if (actToValidate.length > 0) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      activity.name === '' ||
            activity.difficulty === '' ||
            activity.duration === '' ||
            activity.duration === 0 ||
            activity.season === '' ||
            activity.countries.length < 1 ||
            errors.name !== '' ||
            errors.difficulty !== '' ||
            errors.duration !== '') {
      toast.error('Please, check the fileds', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      return
    }

    if (validateActivity(activity.name)) {
      toast.warn(`${activity.name} already exists`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      await axios.post(process.env.REACT_APP_ACTIVITIES_URL, activity)
      // console.log(activity)
      toast.success('Created!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      setActivity({
        name: '',
        difficulty: 1,
        duration: 0,
        season: '',
        countries: []
      })
      dispatch(getActivities())
      dispatch(getCountries())
      resetSelects()
    }
  }
  // console.log(activity.countries);

  return (
    <div className='formContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='formTitle'>Add an Activity!</h1>
        <label>Activity Name*</label>
        <input className='formInputs' type='text' value={activity.name} name='name' onChange={handleChange} autoComplete='off' />
        {errors.name !== '' ? <p className='danger'>{errors.name}</p> : null}
        <div className='diffDuration'>
          <div className='difficulty'>
            <label>Difficulty*</label>
            <input className='formInputs' type='number' value={activity.difficulty} name='difficulty' onChange={handleChange} />
            {errors.difficulty !== '' ? <p className='danger'>{errors.difficulty}</p> : null}
          </div>
          <div className='duration'>
            <label>Duration (in hours)*</label>
            <input className='formInputs' type='number' value={activity.duration} name='duration' onChange={handleChange} />
            {errors.duration !== '' ? <p className='danger'>{errors.duration}</p> : null}
          </div>
        </div>
        <label>Season*</label>
        <select id='selectSeason' className='select formInputs' name='season' onChange={handleChange}>
          <option value='defaultValue' disabled selected>Select Season</option>
          <option value='Autumn'>Autumn</option>
          <option value='Winter'>Winter</option>
          <option value='Spring'>Spring</option>
          <option value='Summer'>Summer</option>
        </select>
        <label>Countries (one or more)*</label>
        <div className='addCountry'>
          <select id='selectCountries' className='select formInputs' name='countries'>
            <option value='defaultValue' disabled selected>Select Countries</option>
            {orderedCountries.map(country =>
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            )}
          </select>
          <button className='addCountryBtn' onClick={onClickCountry}>Add</button>
        </div>
        <ul className='countriesList'>
          {activity.countries.length > 0 ? activity.countries.map(country => <li className='countryItem' key={country}><button className='deleteBtn' onClick={() => deleteCountry(country)}>X</button> {country}</li>) : null}
        </ul>
        <p className='danger spacing'>(*) required fields</p>
        <button disabled={button} type='submit' className={button === false ? 'addBtn' : 'disabled'}>Create!</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Form
