var express = require('express');
var browserSync = require('browser-sync');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
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

// all the back end server routing and controller things
app.use(require('./serv/routes'));

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var url = process.env.IP || '0.0.0.0';
var port = 3000;
app.set('port', process.env.PORT || port);

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
    });
}
