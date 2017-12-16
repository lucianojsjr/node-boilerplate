const UserDAO = require('./user.dao');
const Utils = require('../utils/utils');

const indexAction = (req, res) => {
	const id = req.params.user_id;

	if (id) {
		return UserDAO.find(id, (error, data) => Utils.handleResponse(error, data, res));
	}

	UserDAO.listAll((error, data) => Utils.handleResponse(error, data, res));
};

const UserController = {
	indexAction: indexAction
};

module.exports = UserController;