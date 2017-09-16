// apiController.js

module.exports = (()=>{
	'use strict';
	console.log('apiController.js pizza project');
	const request = require('request');
	class apiController{
		getNames(req, res){
			console.log(req.param('id'));
			res.render("api", {id: req.param('id')});
		}
		getData(req, res){
			request('https://swapi.co/api/people/', (err, response, data) => {
				console.log("inside of the request", err, response.statusCode, data);
				if(!err && response.statusCode === 200){
					res.json(JSON.parse(data));
				} else {
					console.log("error", err);
				}
			});
		}
	}
	return new apiController();
})();