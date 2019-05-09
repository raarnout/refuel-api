const http = require('http');
const server = http.createServer((req, res) => {
	// prints log in terminal when visiting localhost:3000
	console.log('incomming requests');
});

server.listen(3000);
