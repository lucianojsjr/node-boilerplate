import http from 'http';

const server = http.createServer();
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`The Server is Running on Port: ${port}`);
});
