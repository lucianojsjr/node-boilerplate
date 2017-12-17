const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;

const database = require('./api/database');
const routes = require('./api/routes');

let app;
let server;
let middlewares;

const configApp = () => {
	app = express();

	middlewares = require('./middlewares/index')(app);
	app.use('/api', routes);
};

const startServer = () => {
	server = http.createServer(app);

	server.listen(port, () => {
		console.log(`The Server is Running on Port: ${port}`);
	});
};

const handleError = (error) => {
	console.log(error);
};

database.sequelize.sync()
	.then(configApp)
	.then(startServer)
	.catch(handleError);

