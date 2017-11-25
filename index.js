const http = require('http');
const database = require('./api/database');

const server = http.createServer();
const port = process.env.PORT || 3000;

const startServer = () => {
	server.listen(port, () => {
		console.log(`The Server is Running on Port: ${port}`);
	});
};

const handleError = (error) => {
	console.log(error);
};

database.sync()
	.then(startServer)
	.catch(handleError);

