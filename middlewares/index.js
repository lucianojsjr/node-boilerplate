const Middewares = (app) => {
	const bodyParser = require('body-parser');
	const helmet = require('helmet');
	const allowCORS = require('./cors');

	app.use(allowCORS);
	app.use(helmet());
	app.use(bodyParser.json({
		limit: '10mb'
	}));
};

module.exports = Middewares;