const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter messages</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		// after res.end() we must not use res.write() or res.header() anymore.
		// Thats why we return from the anonymous function.
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		// we listen on 'data' event, which will be fired whenever a new chunk is ready to be read.
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		})

		// Data is comming in like a stream of data.
		// The incomming request-stream is a ongoing process.
		// The request is broken down in chunks.
		// We can't start working arbitrary on these single chunks.
		// If we want to work on these chunks, we need buffers.
		// listen to 'end' event. When this event is fired when it's done parsing the incomming request.
		return req.on('end', () => {
			// at this point all chunks are loaded in.
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
	
			// writeFileSync blocks code-execution, so we use writeFile
			fs.writeFile('./dist/message.txt', message, (err) => {
				if (err) {console.log(err)};
				// redirect to '/' only when we are done parsing the request.
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		})
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body>blabla</body>');
	res.write('</html>');
	res.end();
});

server.listen(3000);