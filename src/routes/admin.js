// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const adminController = require('../controllers/admin');

// /admin/add-receipt => GET
router.get('/add-receipt', adminController.getAddReceipt);

// /admin/receipts => GET
router.get('/receipts', adminController.getReceipts);

// /admin/add-receipt => POST
router.post('/add-receipt', adminController.postAddReceipt);

module.exports = router;
