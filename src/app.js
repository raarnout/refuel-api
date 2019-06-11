const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const dashboardData = require('./routes/dashboard');

// set the global 'view enige' to 'ejs'
app.set('view engine', 'ejs')
// tell express that the views can be found in the 'views' folder.
app.set('views', path.join(rootDir, 'views'));

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
app.use('/', dashboardData);
app.use('/admin', adminRoutes);


// handles error route
app.use((req, res, next) => {
	res.status(404).render('404', { 
		path: '',
		pageTitle: 'Page not Found'
	});
})

app.listen(3000);
