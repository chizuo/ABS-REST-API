// Required package dependencies for api-gateway
const express = require('express');
const scrapers = require('./scrapers/scraper-gateway');
const accounts = require('./account/account')

// Instance of request router
const router = express.Router();
router.use('/api', scrapers);
router.use('/account', accounts);

module.exports = router;