"use strict";
const mysql = require('mysql');

class Db{

	constructor(){

		this.info = {
			host : 'localhost',
		  	user : 'root',
		  	password : 'root',
		  	database : 'payroll_panda'
		}
		this.connection = mysql.createPool(this.info);
	}

	onConnect(){
		return this.connection;
	}
}
module.exports = new Db();