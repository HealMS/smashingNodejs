var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<marquee>Smashing Nodejs</marquee>');
     throw new Error();
}).listen(3000);

process.on('uncaughtException', function (err) {
    console.error(err);
});