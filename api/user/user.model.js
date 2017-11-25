let User;

class UserModel {
	define(sequelize, DataTypes) {
		User = sequelize.define('user', {
			email: DataTypes.STRING,
			password: DataTypes.TEXT
		}, {
			underscored: true,
			classMethods: {
				associate: function() {
				}
			}
		});

		return User;
	}

	listAll(callback) {
		User.findAll({
			raw: true
		}).then(data => callback(null, data))
			.catch(error => callback(error, null));
	}
}

module.exports = UserModel;