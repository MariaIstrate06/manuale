const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // You can specify any port you prefer

const server = http.createServer((req, res) => {
    // Serve index.html file
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else if (req.url === '/style.css') { // Serve CSS file
        const filePath = path.join(__dirname, 'style.css');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/css' });
        readStream.pipe(res);
    } else {
        // Handle other requests with 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
