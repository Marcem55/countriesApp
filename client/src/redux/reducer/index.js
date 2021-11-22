import { CLEAR_PAGE, FILTER_ACTIVITY, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, ORDER, RESET_FILTERS } from '../actions/actionTypes'

const initialState = {
  countries: [],
  countriesCopy: [],
  activities: [],
  countryDetail: undefined
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    case FILTER_CONTINENT: {
      const continentFilteredCountries = state.countries.filter(c => c.continent.includes(payload))
      return {
        ...state,
        countriesCopy: payload === 'All' ? state.countries : continentFilteredCountries
      }
    }
    case FILTER_ACTIVITY: {
      const countriesWithActivities = state.countries.filter(country => country.activities.find(activity => activity.name === payload))
      // console.log(countriesWithActivities)
      return {
        ...state,
        countriesCopy: payload === 'All' ? state.countries.filter(country => country.activities.length > 0) : countriesWithActivities
      }
    }
    case ORDER:
      if (payload === 'A-Z') {
        return {
          ...state,
          countriesCopy: [...state.countriesCopy.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)]
        }
      } else if (payload === 'Z-A') {
        return {
          ...state,
          countriesCopy: [...state.countriesCopy.sort((a, b) => b.name > a.name ? 1 : b.name < a.name ? -1 : 0)]
        }
      } else if (payload === 'Less') {
        return {
          ...state,
          countriesCopy: [...state.countriesCopy.sort((a, b) => a.population > b.population ? 1 : a.population < b.population ? -1 : 0)]
        }
      } else {
        return {
          ...state,
          countriesCopy: [...state.countriesCopy.sort((a, b) => b.population > a.population ? 1 : b.population < a.population ? -1 : 0)]
        }
      }
    case RESET_FILTERS:
      return {
        ...state,
        countriesCopy: state.countries
      }
    default:
      return state
  }
}

export default rootReducer
