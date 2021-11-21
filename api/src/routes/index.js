const { Router } = require('express')
// Importar todos los routers;
const countriesRouter = require('./countries')
const activitiesRouter = require('./activities')

const router = Router()

// Configurar los routers
router.use('/countries', countriesRouter)
router.use('/activities', activitiesRouter)

module.exports = router
