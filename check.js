'use strict'
var md5 = require('md5');

module.exports = (function(data, resp){
  var raw = data.toLowerCase();
  raw.trim();
  var send = md5(raw)
  console.log(send)
return (send)
})
