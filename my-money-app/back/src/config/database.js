const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://tobias:tobias@cluster0-mzvum.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })