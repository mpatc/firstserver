'use strict';
var http = require('http');
var md5 = require('md5');
var fs = require('fs');
const PORT = 65000;
var server = http.createServer(function(req, resp) {
    var params = req.url.split('/')
    var test = params[1].toLowerCase();
    switch (test) {
      case "check":
      break;

      case'':
      var data = fs.readFileSync('./public/index.html')
        resp.end(data.toString())
        break;
        case "email":
        var toSend = params[2]
        resp.end(md5(toSend))
        break;
        case "math":

        break;

        default:
        fs.readFile(`./public/${test}`, (err, data) => {
          if(err){
        resp.statusCode = 404;
        resp.write(`.......<h1> u done fucked up sun</h1>............`)
        resp.end("try again\n");
      } else {
resp.end(data.toString())
      }
    })
    break;
  }



})
    server.listen(PORT, function(err) {
        if (err) return console.log("err  ", err);

        console.log(`node server listening on port ${PORT}`)
    });
