var http = require('http');
var dateTime = require('./dateTime');
var url = require('url');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});

    //res.write("The date and time is " + dateTime.myDateTime())
    //res.write(req.url);

    //let q = url.parse(req.url, true).query;
    // console.log(q); returns { year: '2017', month: 'July' }
      // {}
    //let text = q.year + " " + q.month;
    // http://localhost:8080/?year=2017&month=July returns 2017 July

    // let q = url.parse(req.url, true); without .query
    // console.log(q)
    //   returns -->
    //     Url {
    //       protocol: null,
    //       slashes: null,
    //       auth: null,
    //       host: null,
    //       port: null,
    //       hostname: null,
    //       hash: null,
    //       search: '?year=2017&month=february',
    //       query: { year: '2017', month: 'february' },
    //       pathname: '/default.htm',
    //       path: '/default.htm?year=2017&month=february',
    //       href: '/default.htm?year=2017&month=february' }
    //     Url {
    //       protocol: null,
    //       slashes: null,
    //       auth: null,
    //       host: null,
    //       port: null,
    //       hostname: null,
    //       hash: null,
    //       search: '',
    //       query: {},
    //       pathname: '/favicon.ico',
    //       path: '/favicon.ico',
    //       href: '/favicon.ico' }
    // res.end();

    // fs.readFile('demofile1.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type':'text/html'});
    //   res.write(data);
    //   res.end();
    // });

    // fs.appendFile('mynewfile1.txt', 'Hello content! I liek mudkips', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });

    // fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    //   if (err) throw err;
    //   console.log('Updated!');
    // });

    // fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    //   if (err) throw err;
    //   console.log('Replaced!');
    // });

    //winter or summer
    // var q = url.parse(req.url, true);
    // var filename = "." + q.pathname;
    // fs.readFile(filename, function(err, data) {
    //   if (err) {
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     return res.end("404 Not Found");
    //   }
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   return res.end();
    // });


    //Create an event handler:
    var myEventHandler = function () {
      console.log('I hear a scream!');
    }

    //Assign the event handler to an event:
    eventEmitter.on('scream', myEventHandler);

    //Fire the 'scream' event:
    eventEmitter.emit('scream');
}).listen(8080);
