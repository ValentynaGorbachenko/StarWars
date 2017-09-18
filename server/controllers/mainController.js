// mainController.js
module.exports = (()=>{
	'use strict';
	console.log('mainController.js StarWars project');
	const request = require('request');
	class mainController{
		index(req, res){
			res.render("index");
		}
	}
	return new mainController();
})();