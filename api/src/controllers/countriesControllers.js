import axios from "axios";

// Function to get apiCountries
const getApiCountries = async () => {
    const allCountries = (await axios.get('https://restcountries.com/v3/all')).data;
    console.log(allCountries);
}

module.exports = {
    getApiCountries,
}