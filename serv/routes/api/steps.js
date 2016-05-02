var router = require('express').Router()

var Step = require('../../models/step').Step

// GET ./api/step
router.get('/step', function(req, res) {
    Step.find({}, function(err, steps) {
        if (err)
            return res.json({
                error: "Error fetching steps",
                error: err
            });
        else if (!steps)
            return res.json({
                error: "Error finding steps",
                error: err
            });
        //console.log('steps', steps);
        res.send(steps);
    })
})

router.get('/step/:_id', function(req, res) {
    Step.findOne({
        _id: req.params._id
    }, function(err, step) {
        if (err)
            return res.json({
                error: "Error fetching steps",
                error: err
            });
        else if (!step)
            return res.json({
                error: "Error finding steps",
                error: err
            });
        res.send(step);
    })
})

router.put('/step/:_id', function(req, res) {
    Step.findOne({
        _id: req.params._id
    }, function(err, step) {
        if (err)
            return res.json({
                error: "Error fetching steps",
                error: err
            });
        else if (!step)
            return res.json({
                error: "Error finding steps",
                error: err
            });
        //res.send(step);
        step.title = req.body.title;
        step.description = req.body.description;
        step.save(function(err, result) {
            if (err)
                return res.json({
                    error: err
                });
            res.json({
                message: "Successfully updated step",
                step: result
            })
        })
    })
})

router.post('/step', function(req, res) {
    console.log('adding new step: ' + req.body.title)
    var step = new Step({
        title: req.body.title,
        description: req.body.description
    })
    step.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added step",
            step: result
        })
    })
})

module.exports = router
