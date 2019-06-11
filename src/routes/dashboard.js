// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const receiptController = require('../controllers/receipt')

/**
 * handle incomming GET requests on /admin/add-receipt route 
 **/
router.get('/', receiptController.getProducts)

module.exports = router;
