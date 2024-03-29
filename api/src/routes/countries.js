const { Router } = require('express')
// const axios = require('axios');
const { getAllCountries, getCountryByName, getCountryById } = require('../controllers/countriesControllers')

const router = Router()

// Traigo por name, y si no hay name traigo todos
router.get('/', async (req, res) => {
  const { name } = req.query
  if (!name) {
    try {
      const countries = await getAllCountries()
      return res.status(200).json(countries)
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  } else {
    try {
      const country = await getCountryByName(name)
      return res.status(200).json(country)
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }
})

// Traigo por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const country = await getCountryById(id)
    return res.status(200).json(country)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})

module.exports = router
