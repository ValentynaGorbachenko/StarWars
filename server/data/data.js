// data.js

// https://swapi.co/api/people/
module.exports = (function getAllData(url){
	const request = require('request');
	getData(req, res){
		request(url, (err, response, data) => {
			console.log("inside of the request", err, response.statusCode, data);
			if(!err && response.statusCode === 200){
				res.json(JSON.parse(data));
			} else {
				console.log("error", err);
			}
		});
	}
})(url);

