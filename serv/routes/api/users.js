var router = require('express').Router()

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

module.exports = router
