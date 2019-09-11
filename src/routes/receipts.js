// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const receiptController = require('../controllers/receipts');

router.get('/', receiptController.getReceipts);

module.exports = router;
