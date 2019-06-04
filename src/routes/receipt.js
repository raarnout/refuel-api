const express = require('express');

const router = express.Router();

/**
 * handle incomming GET requests on /admin/add-receipt route 
 **/
router.get('/add', (req, res, next) => {
    res.send(`
    <form action="/receipt/add" method="POST">
        <label>trip mileage: </label> <input type="text" name="trip-mileage"><br>
        <label>volume: </label>  <input type="text" name="volume"><br>
        <label>cost: </label>    <input type="text" name="cost"><br>
        <button type="submit">send receipt</button>
    </form>
        `);
})

/**
 * handle incomming POST requests on /admin/add-receipt route 
 **/
router.post('/add', (req, res, next) => {
    console.log(req.body);
    res.redirect('/receipt/add');
})

module.exports = router;
