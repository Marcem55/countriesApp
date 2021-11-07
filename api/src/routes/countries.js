const { Router } = require('express');
// const axios = require('axios');
const { getApiCountries } = require('../controllers/countriesControllers');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const countries = await getApiCountries();
        return res.status(200).json(countries);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;