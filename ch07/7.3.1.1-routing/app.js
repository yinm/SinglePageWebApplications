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

app.get('/user/list', function (request, response) {
  response.contentType('json')
  response.send({ title: 'user list' })
})

app.post('/user/create', function (request, response) {
  response.contentType('json')
  response.send({ title: 'user created' })
})

app.get('/user/read/:id([0-9]+)', function (request, response) {
  response.contentType('json')
  response.send({
    title: 'user with id ' + request.params.id + ' found'
  })
})

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port,
  app.settings.env
)
