var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');
var path = require('path');

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

// some doc data to serve via REST api
var docs = [ {
	id : "f588d038-0cfd-4e4b-add7-959c332081bc",
	title : "doc 1"
}, {
	id : "5503b3f0-306e-11e5-8a3f-abf51e86c8d3",
	title : "doc 2",
}, {
	id : "5ff02e60-306e-11e5-b55a-9f922d0a88e3",
	title : "doc 3",
}, ];

// GET ./api/docs
router.get('/docs', function(req, res) {
	res.send(docs);
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

var server = app.listen(app.get('port'), url, function() {
	console.log('Static server listening url %s on port %s', url, server
			.address().port);
})