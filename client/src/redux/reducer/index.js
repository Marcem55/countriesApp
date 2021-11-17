import { CLEAR_PAGE, FILTER_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, ORDER_BY_NAME, ORDER_BY_POPULATION } from "../actions/actionTypes";

const initialState = {
    countries: [],
    countriesCopy: [],
    activities: [],
    countryDetail: undefined,
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
                countriesCopy: payload
            }
        case FILTER_CONTINENT:
            const continentFilteredCountries = state.countries.filter(c => c.continent.includes(payload));
            return {
                ...state,
                countriesCopy: payload === 'All' ? state.countries : continentFilteredCountries
            }
        case FILTER_ACTIVITY:
            
        case ORDER_BY_NAME:
            const orderedNameCountries = state.countriesCopy.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
            return {
                ...state,
                countriesCopy: payload === 'A-Z' ? orderedNameCountries : orderedNameCountries.reverse()
            }
        case ORDER_BY_POPULATION:
            const orderedPopulationCountries = state.countriesCopy.sort((a, b) => a.population > b.population ? 1 : a.population < b.population ? -1 : 0);
            return {
                ...state,
                countriesCopy: payload === 'Less' ? orderedPopulationCountries : orderedPopulationCountries.reverse()
            }
        default:
            return state;
    }
}

export default rootReducer;