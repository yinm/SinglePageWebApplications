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

app.all('/:obj_type/*?', function(request, response, next) {
  response.contentType('json')
  next()
})

app.get('/:obj_type/list', function (request, response) {
  response.send({ title: request.params.obj_type + ' list' })
})

app.post('/:obj_type/create', function (request, response) {
  response.send({ title: request.params.obj_type + ' created' })
})

app.get('/:obj_type/read/:id([0-9]+)', function (request, response) {
  response.send({
    title: request.params.obj_type + ' with id ' + request.params.id + ' found'
  })
})

app.post('/:obj_type/update/:id([0-9]+)', function(request, response) {
  response.send({
    title: request.params.obj_type + ' with id ' + request.params.id + ' updated'
  })
})

app.get('/:obj_type/delete/:id([0-9]+)', function(request, response) {
  response.send({
    title: request.params.obj_type + ' with id ' + request.params.id + ' deleted'
  })
})

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port,
  app.settings.env
)
