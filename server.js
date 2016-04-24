var express = require('express');
var browserSync = require('browser-sync');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

//var User = require('./serv/models/user').User
var Step = require('./serv/models/step').Step

// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// for serving json api (stub included below)
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'))

// server-side router
var router = express.Router();

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

// GET ./api/result
router.get('/step', function(req, res) {
    Step.find({}, function(err, steps) {
        //console.log('steps', steps);
        res.send(steps);
    })
})

app.use('/api', router);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

function listening () {
    browserSync({
        proxy: 'localhost:' + port,
        files: ['public/**/*.{js,css}']
    });
    console.log('BrowserSync server listening url %s on port %s in %s mode', url, server
        .address().port, process.env.NODE_ENV);
}

if (process.env.NODE_ENV === 'development') {
    var server = app.listen(app.get('port'), listening);
}

if (process.env.NODE_ENV === 'production') {
    var server = app.listen(app.get('port'), url, function() {
        console.log('Static server listening url %s on port %s in %s mode', url, server
            .address().port, process.env.NODE_ENV);
    })
}