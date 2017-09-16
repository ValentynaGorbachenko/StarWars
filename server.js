// server.js  pizza project
'use strict';
console.log('server.js  pizza project');
const express = require('express'),
	path = require('path'),
	bp = require('body-parser');

var app = express();

// app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(8000, ()=>{
	console.log('Listening on port 8000');
});


/*

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
	
	socket.on("posting_form", function(data){
		// setting the random number
		var rand = Math.floor(Math.random()*(1000-1+1)-1);
		// passing two actions to the spesific user with data
		socket.emit("updated_message", {response: "You emitted the following information to the server: ", info: data});
		socket.emit("random_number", {random: "Your lucky number emitted by server is "+ rand})
	});

	
});
*/