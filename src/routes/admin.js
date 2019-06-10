// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const rootDir = require('../util/path');

const receipts = [];

router.get('/add-receipt', (req, res, next) => {
    res.render('add-receipt', { 
        path: '/admin/add-receipt',
        pageTitle: 'Add Receipt'
	});
})

/**
 * handle incomming POST requests on /admin/add-receipt route 
 **/
router.post('/add-receipt', (req, res, next) => {
    const body = req.body;
    console.log(`body,`, JSON.stringify(body));
    receipts.push({
        distance: body.distance,
        volume: body.volume,
        pricePerLiter: body.pricePerLiter
    })
    res.redirect('/');
})

exports.router = router;
exports.receipts = receipts;
