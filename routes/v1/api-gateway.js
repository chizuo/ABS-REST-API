// Required package dependencies for api-gateway
const router = require('express').Router();
const scrapers = require('./scraper-gateway');
const accounts = require('./account');

router.use('/api', scrapers);
router.use('/account', accounts);

module.exports = router;