var http = require('http'),
    qs = require('querystring');
http.createServer(function (req, res) {
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    console.log(body);
    req.on('end', function () {
        res.writeHead(200);
        res.end('Done!');
        console.log('\n got name \033[90m' + qs.parse(body).name + '\033[39m\n');
    });
}).listen(3000);