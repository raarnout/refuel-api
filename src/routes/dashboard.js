// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const dashboardController = require('../controllers/dashboard');

router.get('/', dashboardController.getIndex);

router.get('/receipts', dashboardController.getReceipts);

module.exports = router;
