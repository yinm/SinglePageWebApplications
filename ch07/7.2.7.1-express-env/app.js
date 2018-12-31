'use strict'

var
  http = require('http'),
  express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  errorHandler = require('errorhandler'),

  app = express(),
  server = http.createServer(app)

app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'))
  app.use(errorHandler())
}

if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler())
}

app.get('/', function (request, response) {
  response.send('Hello Express')
})

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
)
console.log(process.env.NODE_ENV)
