var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<marquee>Smashing Node</marquee>');
}).listen(3000);