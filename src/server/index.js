const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/controller/routes')
const cors = require('./cors')

routes(server)

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

module.exports = server
