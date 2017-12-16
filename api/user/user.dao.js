const UserModel = require('../database').user;

const listAll = (callback) => {
	UserModel.findAll({
		raw: true
	}).then((data) => {
		callback(null, data);
	}).catch((error) => {
		callback(error, null);
	});
};

const find = (id, callback) => {
	UserModel.find({
		where: {
			id: id
		},
		raw: true
	}).then((data) => {
		callback(null, data);
	}).catch(callback);
};

const UserDAO = {
	find: find,
	listAll: listAll
};

module.exports = UserDAO;