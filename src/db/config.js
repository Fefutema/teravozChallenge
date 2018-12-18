const mongoose = require('mongoose')
// const Task = require('./model/teravozModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://teravoz:tera123@ds237574.mlab.com:37574/teravozz')

module.exports = mongoose
