// apiController.js

module.exports = (()=>{
	'use strict';
	console.log('apiController.js pizza project');
	const request = require('request'),
		people = require('./../data/people.js'),
		films = require('./../data/films.js'),
		error = require('./../data/error.js');

	class apiController{
		getNames(req, res){
			// console.log(req.method);
			// console.log(req.params['id']);
			let id = parseInt(req.params['id']);
			let names = [];
			// console.log(typeof(id));
			if (req.method == "GET" && (id >= 1 && id <= 7)){
				let characters = films[id].characters;
				// console.log(films[id].title);
				// console.log(films[id].characters);
				for (let i = 0; i < characters.length; i++){
					let ppl = "";
					for (let j = 28; j < characters[i].length; j++){
						ppl += characters[i][j];
						// console.log("ppl " + ppl);
						if (characters[i][j+1] == "/") {
							break;
						}
					}
					// console.log(ppl);
					// console.log(people[ppl].name)
					names.push(people[ppl].name);
				}
				// console.log(names);
				res.header('charset', 'utf-8');
				res.set('Content-Type', 'application/json').status(200).json({"film_title": films[id].title , "films_id": id ,"names": names});
			} else {
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