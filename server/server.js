'use strict';

var express = require('express')
    , app = express()
    , http = require('http')
    , port = 3000

var server = http.createServer(app).listen(port, function() {
  console.log('Server listening on ' + port)
})

app.use('/', express.static(__dirname + '/../client'))