'use strict'

var
  http = require('http'),
  express = require('express'),
  morgan = require('morgan'),

  app = express(),
  server = http.createServer(app)

app.use(morgan('combined'))
app.get('/', function(request, response) {
  response.send('Hello Express')
})

server.listen(3000)
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port,
  app.settings.env
)
