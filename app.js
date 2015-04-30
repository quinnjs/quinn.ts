'use strict';

var http = require('http');

var createApp = require('quinn');
var respond = require('quinn/respond');
var createRouter = require('wegweiser'),
    GET = createRouter.GET;

function getMine() {
	return respond().body('Mine!\n');
}

function getJson() {
	return respond.json({ error: 'Something bad(ish)!' }).status(400);
}

var router = createRouter(
	GET('/mine')(getMine),
	GET('/json')(getJson)
);
var server = http.createServer(createApp(router));
server.listen(8000, function() {
	console.log('Listening.');
});
