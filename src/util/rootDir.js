const path = require('path');

// process.mainModule.filename == app.js 
module.exports = path.dirname(process.mainModule.filename);