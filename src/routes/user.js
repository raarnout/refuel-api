// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

const receiptController = require('../controllers/receipt')

router.get('/add-receipt', receiptController.getAddReceipt);

router.post('/add-receipt', receiptController.postAddReceipt);

module.exports = router;
