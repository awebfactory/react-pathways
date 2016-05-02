var router = require('express').Router()

var Step = require('../../models/step').Step

// GET ./api/step
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

router.get('/step/:_id', function(req, res) {
    Step.findOne({_id: req.params._id}, function(err, step) {
        if (err)
            return res.json({error: "Error fetching step"});        
        else if (!step)
            return res.json({error: "Error finding step"});
        res.send(step);
    })
})

module.exports = router
