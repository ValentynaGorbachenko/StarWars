// routes.js StarWars project
console.log('routes.js StarWars project');
'use strict';
const mainController = require('./../controllers/mainController.js');
const apiController = require('./../controllers/apiController.js');
module.exports = (app)=>{
	app.get('/', mainController.index);
	app.get('/movies/:id/names', apiController.getNames);
	// app.get('/getdata', apiController.getData); // testing route

};