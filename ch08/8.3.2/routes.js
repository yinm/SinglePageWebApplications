'use strict'
var
  configRoutes,
  MongoClient = require('mongodb').MongoClient,

  url = 'mongodb://localhost:27017',
  dbName = 'spa',
  db

MongoClient.connect(url, function(err, client) {
  console.log('** Connected to MongoDB **')

  db = client.db(dbName)
})

configRoutes = function (app, server) {
  app.get('/', function (request, response) {
    response.redirect('/spa.html')
  })

  app.all('/:obj_type/*?', function(request, response, next) {
    response.contentType('json')
    next()
  })

  app.get('/:obj_type/list', function (request, response) {
    var collection = db.collection(request.params.obj_type)
    collection.find({}).toArray(function(err, docs) {
      response.send(docs)
    })
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
}

module.exports = { configRoutes: configRoutes }
