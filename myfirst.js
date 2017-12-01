var http = require('http');
var dateTime = require('./dateTime');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time is " + dateTime.myDateTime())
    //res.write(req.url);
    let q = url.parse(req.url, true).query;
    let text = q.year + " " + q.month;
    // http://localhost:8080/?year=2017&month=July returns 2017 July
    res.end(text);
}).listen(8080);
