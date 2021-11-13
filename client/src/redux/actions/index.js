import { CLEAR_PAGE, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL } from "./actionTypes";
import axios from 'axios';
import constants from "../../constants";

export const getCountries = () => {
    return async (dispatch) => {
        const countries = await axios.get(`${constants.COUNTRIES_URL}`);
        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        });
    }
}

export const getActivities = () => {
    return async (dispatch) => {
        const activities = await axios.get(`${constants.ACTIVITIES_URL}`);
        dispatch({
            type: GET_ACTIVITIES,
            payload: activities.data
        })
    }
}

export const getCountryDetail = (id) => {
    return async (dispatch) => {
        const country = await axios.get(`${constants.COUNTRIES_URL}/${id}`);
        dispatch({
            type: GET_COUNTRY_DETAIL,
            payload: country.data
        })
    }
}

export const getCountriesByName = (name) => {
    return async (dispatch) => {
        const countries = await axios.get(`${constants.COUNTRIES_URL}?name=${name}`);
        dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: countries.data
        })
    }
}

export const clearPage = () => {
    return {
        type: CLEAR_PAGE,

    }
}