import { GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRY_DETAIL, POST_ACTIVITY } from "./actionTypes";
import axios from 'axios';
import constants from "../../constants";

export const getCountries = (name) => {
    return async (dispatch) => {
        let countries;
        if(name) {
            countries = await axios.get(constants.COUNTRIES_URL + `?name=${name}`);
        } else {
            countries = await axios.get(constants.COUNTRIES_URL);
        }
        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        });
    }
}