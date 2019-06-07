const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');

const receiptRoutes = require('./routes/receipt');

/** 
 * add middleware for all incomming request
 * parse body via body-parser package.
**/
app.use(bodyParser.urlencoded({extended: false}));


// add static middleware from 'public' folder
app.use(express.static(path.join(rootDir, 'public')));

/** 
 * import outsourced routes.
**/
app.use('/receipt', receiptRoutes);


// handles error route
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);
