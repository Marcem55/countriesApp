import { GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRY_DETAIL, POST_ACTIVITY } from "../actions/actionTypes";

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
        default:
            return state;
    }
}

export default rootReducer;