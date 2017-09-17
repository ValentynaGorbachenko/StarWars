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
