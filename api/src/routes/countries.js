const { Router } = require('express');
// const axios = require('axios');
const { getApiCountries, getCountryByName } = require('../controllers/countriesControllers');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        try {
            const countries = await getApiCountries();
            return res.status(200).json(countries);
        } catch (error) {
            return res.status(400).json({message: error});
        }
    } else {
        try {
            const country = await getCountryByName(name);
            return res.status(200).json(country);
        } catch (error) {
            return res.status(400).json({message: error});
        }
    }
});

module.exports = router;