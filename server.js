// Minimal zero-dependency static server for Harvin's digital menu.
// Serves index.html for every route; respects Railway's $PORT.
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const file = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); res.end('Server error'); return; }
    res.writeHead(200, {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300'
    });
    res.end(data);
  });
}).listen(port, () => console.log('Harvin\'s menu live on port ' + port));
