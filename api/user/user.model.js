const UserModel = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
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
};

module.exports = UserModel;