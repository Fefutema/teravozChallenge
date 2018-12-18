const TeravozService = require('../../services/teravozService')

const routes = (server) => {
  server.post('/webhook', (req, res, next) => {
    TeravozService.recebeDelegate(req, res)
    next()
  })
}

module.exports = routes
