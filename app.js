/**
 * Module dependencies
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    routesIndex = require('./routes/index'),
    routesPartials = require('./routes/partials'),
    routesApi = require('./routes/api'),
    http = require('http'),
    path = require('path');

var app = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHandler());
}

// production only
if (env === 'production') {
    // TODO
}

/**
 * Routes
 */

// serve index and view partials
app.get('/', routesIndex.index);
app.get('/partials/:name', routesPartials.partials);

// JSON API
app.get('/api/products', routesApi.products);

// redirect all others to the index (HTML5 history)
app.get('*', routesIndex.index);

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});