const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.export = mongoose.connect('mongodb+srv://todo:todo@cluster0-olr9g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true })