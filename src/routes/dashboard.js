// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const rootDir = require('../util/path');

/**
 * handle incomming GET requests on /admin/add-receipt route 
 **/
router.get('/', (req, res, next) => {
    // we use path.join cause this works on both systems linux and windows
    // linux path example: '/user/produces'  
    // windows path example: '\user\products' 
    res.sendFile(path.join(rootDir, 'views', 'dashboard.html'));
})

module.exports = router;
