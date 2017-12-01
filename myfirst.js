var http = require('http');
var dateTime = require('./dateTime');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //res.write("The date and time is " + dateTime.myDateTime())
    //res.write(req.url);

    //let q = url.parse(req.url, true).query;
    // console.log(q); returns { year: '2017', month: 'July' }
      // {}
    //let text = q.year + " " + q.month;
    // http://localhost:8080/?year=2017&month=July returns 2017 July
    // res.end();

    fs.readFile('demofile1.html', function(err, data) {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
}).listen(8080);
