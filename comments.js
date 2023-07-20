// create a web server that can respond to requests for /comments.json
// with a JSON representation of the list of comments

var http = require('http');
var fs = require('fs');
var path = require('path');
var comments = require('./comments');

http.createServer(function (req, res) {
  if (req.url === '/comments.json') {
    // read the comments.json file
    fs.readFile(path.join(__dirname, 'comments.json'), function (err, data) {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading comments file');
      }
      else {
        // set content type header
        res.setHeader('Content-Type', 'application/json');
        // send the contents of the file
        res.end(data);
      }
    });
  }
  else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000);