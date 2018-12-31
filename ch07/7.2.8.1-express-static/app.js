'use strict'

var
  http = require('http'),
  express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),

  app = express(),
  server = http.createServer(app)

app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'))
app.use(errorHandler())

if (process.env.NODE_ENV === 'development') {
  app.use(logger('combined'))
}

app.get('/', function (request, response) {
  response.redirect('/spa.html')
})

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port,
  app.settings.env
)
