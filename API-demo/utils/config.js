class Config{
	
	constructor(app){
		// Setting .html as the default template extension
		app.set('view engine', 'html');

		// Initializing the ejs template engine
		//app.engine('html', require('ejs').renderFile);

		// Telling express where it can find the templates
		/*app.set('views', (__dirname + '/../../dist'));*/

		//Files 
		app.use(require('express').static(require('path').join('dist')));

		app.use(function (req, res, next) {

			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
			res.setHeader('Access-Control-Allow-Credentials', true);
		
			// Pass to next layer of middleware
			next();
		});

	}
}
module.exports = Config;