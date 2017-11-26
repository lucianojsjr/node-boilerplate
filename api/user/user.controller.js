const UserModel = require('../database').user;

const indexAction = (req, res) => {
	UserModel.findAll({
		raw: true
	}).then((data) => {
		res.json({
			status: 'success',
			data: data
		});
	}).catch((error) => {
		res.json({
			status: 'error',
			message: error.message
		});
	});
};

const UserController = {
	indexAction: indexAction
};

module.exports = UserController;