'use strict';

class PlayersHelper{

    constructor(){

        this.mysql = require("../utils/db");
        this.connection = this.mysql.onConnect();
    }

    /*
    * Name of the Method : queryRunner
    * Description : To excute all the queries for helper.
    * Parameter :
    *       1) data query data - query and data to insert in query
    *       2) callback function
    * Return : callback
    */
    queryRunner(data,callback){
        /*
            Function required to run all the queries.
        */
        const query=data.query;
        const insert_data=data.insert_data;
        const that = this;
        this.connection.getConnection(function(err,con){
            if(err){
              con.release();
            }else{
                that.connection.query(String(query),insert_data,function(err,rows){
                con.release();
                if(err){
                    callback({"status": 500, "error": err, "data": null});
                } else {
                    callback({"status": 200, "error": null, "data": rows});
                }
              });
            }
        });
    }

    /*
    * Name of the Method : getPlayers
    * Description : To get all the players
    * Parameter :
    *       1) data - player id
    *       2) callback function
    * Return : callback
    */
    getPlayers(data, callback) {
		const query = `SELECT * FROM players`;

		const qdata = {
			query
		}
		this.queryRunner(qdata, function(result){
			callback(result);
		});

	}

	/*
    * Name of the Method : getPlayer
    * Description : To get the specific player by id
    * Parameter :
    *       1) data - player id
    *       2) callback function
    * Return : callback
    */
	getPlayer(data, callback) {
		const query = `SELECT *
				FROM players u
				WHERE u.id=${data.id}`;

		const qdata = {
			query: query
		}
		this.queryRunner(qdata,function(result){
			callback(result);
		});
    }

    /*
    * Name of the Method : createPlayer
    * Description : To create a player
    * Parameter :
    *       1) data - player body
    *       2) callback function
    * Return : callback
    */
   createPlayer(data, callback) {

		const query = `INSERT players SET ?`;
		const qdata = {
			query: query,
			insert_data: Object.assign({}, data)
        }
		this.queryRunner(qdata, function(result){
			callback(result);
		});
    }

	/*
    * Name of the Method : udpatePlayer
    * Description : To update a specific player by id.
    * Parameter :
    *       1) data - player id and player body
    *       2) callback function
    * Return : callback
    */
	updatePlayer(data, callback) {

		const query = `UPDATE players SET ?  WHERE id = ${data.id}`;
		const qdata = {
			query: query,
			insert_data: {...data}
		}
		this.queryRunner(qdata, function(result){
			callback(result);
		});
    }

    /*
    * Name of the Method : deletePlayer
    * Description : To delete a player by id.
    * Parameter :
    *       1) data - player id
    *       2) callback function
    * Return : callback
    */
   deletePlayer(data, callback) {
    const qdata = {
        query: `delete FROM players WHERE id = ${data.id}`
    }
    this.queryRunner(qdata,function(result){
        callback(result);
    });
}

}

module.exports = new PlayersHelper();
