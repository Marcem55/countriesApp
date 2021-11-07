const axios = require('axios');

// Function to get apiCountries
const getApiCountries = async () => {
    try {
        const apiCountries = (await axios.get('https://restcountries.com/v3/all')).data;
        console.log(apiCountries);
        const allCountries = apiCountries?.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                image: country.flags[0],
                capital: country.capital,
                continent: country.continents[0],
                subregion: country.subregion,
                area: country.area,
                population: country.population
            }
        });
        console.log(allCountries);
        return allCountries;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getApiCountries,
}