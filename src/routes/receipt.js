// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');

// App modules
const rootDir = require('../util/path');

const router = express.Router();

/**
 * handle incomming GET requests on /admin/add-receipt route 
 **/
router.get('/', (req, res, next) => {
    // we use path.join cause this works on both systems linux and windows
    // linux path example: '/user/produces'  
    // windows path example: '\user\products' 
    res.sendFile(path.join(rootDir, 'views', 'receipts.html'));
})

router.get('/add', (req, res, next) => {
    // we use path.join cause this works on both systems linux and windows
    // linux path example: '/user/produces'  
    // windows path example: '\user\products' 
    res.sendFile(path.join(__dirname, '../', 'views', 'add-receipt.html'));
})

/**
 * handle incomming POST requests on /admin/add-receipt route 
 **/
router.post('/add', (req, res, next) => {
    console.log(req.body);
    res.redirect('/receipt');
})

module.exports = router;
