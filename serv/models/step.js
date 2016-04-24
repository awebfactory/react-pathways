var mongoose = require('./db')

var stepSchema = mongoose.Schema({
  title: String,
  description: String,
})

exports.Step = mongoose.model('Step', stepSchema)
