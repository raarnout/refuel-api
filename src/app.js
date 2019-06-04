const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const receiptRoutes = require('./routes/receipt');

/** 
 * add middleware for all incomming request
 * parse body via body-parser package.
**/
app.use(bodyParser.urlencoded({extended: false}));

/** 
 * import outsourced routes.
**/
app.use('/receipt', receiptRoutes);


// handles rout
app.use((req, res, next) => {
	res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000);