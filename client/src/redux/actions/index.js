import { CLEAR_PAGE, FILTER_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, ORDER, RESET_FILTERS } from './actionTypes'
import axios from 'axios'
require('dotenv').config()

export const getCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get(process.env.REACT_APP_COUNTRIES_URL)
    dispatch({
      type: GET_COUNTRIES,
      payload: countries.data
    })
  }
}

export const getActivities = () => {
  return async (dispatch) => {
    const activities = await axios.get(process.env.REACT_APP_ACTIVITIES_URL)
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities.data
    })
  }
}

export const getCountryDetail = (id) => {
  return async (dispatch) => {
    const country = await axios.get(`${process.env.REACT_APP_COUNTRIES_URL}/${id}`)
    dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: country.data
    })
  }
}

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    const countries = await axios.get(`${process.env.REACT_APP_COUNTRIES_URL}?name=${name}`)
    dispatch({
      type: GET_COUNTRIES_BY_NAME,
      payload: countries.data
    })
  }
}

export const clearPage = () => {
  return {
    type: CLEAR_PAGE
  }
}

export const filterContinent = (payload) => {
  return {
    type: FILTER_CONTINENT,
    payload
  }
}

export const filterActivity = (payload) => {
  return {
    type: FILTER_ACTIVITY,
    payload
  }
}

export const orderByName = (payload) => {
  return {
    type: ORDER,
    payload
  }
}

export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  }
}
