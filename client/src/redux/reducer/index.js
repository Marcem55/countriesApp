import { CLEAR_PAGE, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL } from "../actions/actionTypes";

const initialState = {
    countries: [],
    countriesCopy: [],
    activities: [],
    countryDetail: undefined
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesCopy: payload
            }
        
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: payload
            }
        case CLEAR_PAGE:
        return {
            ...state,
            countryDetail: undefined
        }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: payload
            }
        case FILTER_CONTINENT:
        
        default:
            return state;
    }
}

export default rootReducer;