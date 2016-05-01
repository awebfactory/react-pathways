var mongoose = require('./db')

var userSchema = mongoose.Schema({
  gender: String,
  dob: Date,
  name: {
    title: String,
    first: String,
    last: String,
  },
  language: String,
  location: {
    street: String,
    city: String,
    state: String,
    postcode: Number,
    country: String,
    timezone: String,
  },
  phone: String,
  cell: String,
  login: {
    username: String,
    password: String
  },
  email: String,
  created: Date,
  lastAccess: Date,
  lastLogin: Date,
  status: String,
  avatar: String,
  roles: { type: Array, "default": [] }
})

exports.User = mongoose.model('User', userSchema)
