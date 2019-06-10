// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const rootDir = require('../util/path');
const adminData = require('./admin');

/**
 * handle incomming GET requests on /admin/add-receipt route 
 **/
router.get('/', (req, res, next) => {
    res.render('dashboard', { 
        path: '/',
        pageTitle: 'Dashboard',
        receipts: adminData.receipts
	});
})

module.exports = router;
