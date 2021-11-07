const axios = require('axios');

// Function to get apiCountries
const getApiCountries = async () => {
    try {
        const apiCountries = (await axios.get('https://restcountries.com/v3/all')).data;
        // console.log(apiCountries);
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
        // console.log(allCountries);
        return allCountries;
    } catch (error) {
        console.log(error);
    }
}

// Function to get countries by name
const getCountryByName = async (name) => {
    try {
        const countryByName = (await axios.get(`https://restcountries.com/v3/name/${name}`)).data;
        // console.log(countryByName);
        let country = countryByName?.map(c => { // Tengo que hacer un map al countryByName porque llega como array
            return {
                id: c.cca3,
                name: c.name.common,
                image: c.flags[0],
                capital: c.capital,
                continent: c.continents[0],
                subregion: c.subregion,
                area: c.area,
                population: c.population
            }
        })
        // console.log(country);
        return country;
    } catch (error) {
        console.log(error);
    }
}

const getCountryById = async (id) => {
    try {
        const countryById = (await axios.get(`https://restcountries.com/v3/alpha/${id}`)).data;
        console.log(countryById);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getApiCountries,
    getCountryByName,
    getCountryById
}