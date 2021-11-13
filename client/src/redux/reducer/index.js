import { CLEAR_PAGE, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY_DETAIL } from "../actions/actionTypes";

const initialState = {
    countries: [],
    activities: [],
    countryDetail: undefined
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
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
        default:
            return state;
    }
}

export default rootReducer;