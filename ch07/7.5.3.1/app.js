'use strict'

var
  http = require('http'),
  express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  basicAuth = require('express-basic-auth'),
  routes = require('./routes'),

  app = express(),
  server = http.createServer(app)

app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(basicAuth({
    users: { 'user': 'spa' },
    challenge: true
}))
app.use(express.static(__dirname + '/public'))
app.use(errorHandler())

if (process.env.NODE_ENV === 'development') {
  app.use(logger('combined'))
}

routes.configRoutes(app, server)

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port,
  app.settings.env
)
