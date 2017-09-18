// apiController.js

module.exports = (()=>{
	'use strict';
	console.log('apiController.js StarWars project');
	const people = require('./../data/people.js'),
		films = require('./../data/films.js'),
		error = require('./../data/error.js');

	class apiController{
		getNames(req, res){
			let id = parseInt(req.params['id']); // given param
			let names = []; // result array
			// check method and range
			if (req.method == "GET" && (id >= 1 && id <= 7)){
				let characters = films[id].characters; // characters array
				// getting the id and pushing to the result array
				for (let i = 0; i < characters.length; i++){
					let ppl = "";
					for (let j = 28; j < characters[i].length; j++){
						ppl += characters[i][j];
						if (characters[i][j+1] == "/") {
							break;
						}
					}
					names.push(people[ppl].name);
				}
				// giving resposne back
				res.header('charset', 'utf-8');
				res.set('Content-Type', 'application/json').status(200).json({"film_title": films[id].title , "films_id": id ,"names": names});
			} else {
				// giving resposne back
				res.header('charset', 'utf-8');
				res.set('Content-Type', 'application/json');
				res.status(404).json(error);
			}
			// testing 
			// res.render("api", {id: req.params['id']});
		}
	}
	return new apiController();
})();