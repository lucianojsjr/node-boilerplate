const UserModel = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		email: DataTypes.STRING,
		password: DataTypes.TEXT
	}, {
		underscored: true,
		classMethods: {
			associate: (models) => {
				User.belongsTo(models.company, {
					foreignKey: 'company_id'
				});
			}
		}
	});

	return User;
};

module.exports = UserModel;