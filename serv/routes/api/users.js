var router = require('express').Router()

// not being used yet

// var User = require('../../models/user').User

// some user data to serve via REST api
var users = {
  "users": [
    {
      "uuid": "c34b0b66-771b-4614-8c5e-47c6ea9634a2",
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "henri",
        "last": "mason"
      },
      "email": "walter.mondale@example.com",
    },
    {
      "uuid": "c22b0b66-771b-4614-8c5e-47c6ea9634a2",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susan",
        "last": "sweenie"
      },
      "email": "victor.kane@example.com",
    },
]};

// GET ./api/user
router.get('/user', function(req, res) {
    res.send(users.users);
})
/*
// GET ./api/user/:id
router.get('/user/:id', function(req, res) {
    res.send(_.find(users.users, {
        'uuid': req.params.id
    }));
})

// GET ./api/user/email/:email
router.get('/user/email/:email', function(req, res) {
    res.send(_.find(users.users, {
        'email': req.params.email
    }));
})
*/

module.exports = router
