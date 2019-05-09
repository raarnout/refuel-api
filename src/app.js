const http = require('http');
const server = http.createServer((req, res) => {
	const url = req.url;

	if(url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter messages</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		// after res.end() we must not use res.write() or res.header() anymore.
		// Thats why we return from the anonymous function.
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body>blabla</body>');
	res.write('</html>');


	res.end();
});

server.listen(3000);
