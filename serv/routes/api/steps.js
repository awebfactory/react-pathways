var router = require('express').Router()

var Step = require('../../models/step').Step

// GET ./api/result
router.get('/step', function(req, res) {
    Step.find({}, function(err, steps) {
        if (err)
            return res.json({error: "Error fetching steps"});
        else if (!steps)
            return res.json({error: "Error finding steps"});
        //console.log('steps', steps);
        res.send(steps);
    })
})

module.exports = router
