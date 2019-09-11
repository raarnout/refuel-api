// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const receiptController = require('../controllers/receipts');

router.get('/', receiptController.getReceipts);

router.get('/:receiptId', receiptController.getReceipt);

module.exports = router;
