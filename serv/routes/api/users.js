var router = require('express').Router()
var jwt     = require('jsonwebtoken')
var bcrypt  = require('bcrypt')

var User = require('../../models/user').User

// GET ./api/user
router.get('/user', function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            return res.json({error: "Error fetching users"});
        else if (!users)
            return res.json({error: "Error finding users"});
        //console.log('users', users);
        res.send(users);
    })
})

// GET ./api/user/:id

// POST ./api/user/register
router.post('/user/register', function(req, res, next) {
    //console.log('register user: ' + req.body)
    const email = req.body.email
    const password = req.body.password
    const splitmail = email.split("@")
    const username = splitmail[0]
    console.log('username, email, password', username, email, password, '\n')
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) { next(err) }
        var user = new User({
            email: email,
            login: {
                username: username,
                password: hash
            }
        })
        user.save(function (err) {
            if (err) { next(err) }
            res.sendStatus(201)
        })
    })
})

// POST ./api/user/signin

// Update account, profile
// PUT ./api/user/update

// DELETE ./api/user/delete

module.exports = router
