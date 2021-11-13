import { GET_ACTIVITIES, GET_COUNTRIES } from "./actionTypes";
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