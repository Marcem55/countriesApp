import { GET_ACTIVITIES, GET_COUNTRIES } from "../actions/actionTypes";

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
        default:
            return state;
    }
}

export default rootReducer;