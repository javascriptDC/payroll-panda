'use strict';

const playerHelper = require('../helpers/players');

class Routes{

	constructor(app){

		this.app = app;
	}


	/* creating app Routes starts */
	appRoutes(){

		/**
		 *  Route /players RESTful APIs
		 */
		this.app.get('/api/players', function(req, res){
			playerHelper.getPlayers(req.query, function(result){
				res.write(JSON.stringify(result));
				res.end();
			});	
		});

		this.app.get('/api/players/:id', function(req, res){
			playerHelper.getPlayer(req.params, function(result){
				res.write(JSON.stringify(result));
				res.end();
			});	
		});

		this.app.post('/api/players', function(req, res){
			playerHelper.createPlayer(req.body, function(result){
				res.write(JSON.stringify(result));
				res.end();
			});	
		});
		
		this.app.put('/api/players/:id', function(req, res){
			const data = {
				id: req.params.id,
				body: req.body
			}
			playerHelper.updatePlayer(data, function(result){
				res.write(JSON.stringify(result));
				res.end();
			});	
		});

		this.app.delete('/api/players/:id', function(req, res) {
			playerHelper.deletePlayer(req.params, function(result){
				res.write(JSON.stringify(result));
				res.end();
			});	
		});

	}

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = Routes;