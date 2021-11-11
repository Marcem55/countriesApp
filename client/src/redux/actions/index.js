import { GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRY_DETAIL, POST_ACTIVITY } from "./actionTypes";
import axios from 'axios';
import constants from "../../constants";

export const getCountries = () => {
    return async (dispatch) => {
        const countries = await axios.get(constants.COUNTRIES_URL);
        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        })
    }
}