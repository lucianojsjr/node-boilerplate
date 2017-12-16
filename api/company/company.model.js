const CompanyModel = (sequelize, DataTypes) => {
	const Company = sequelize.define('company', {
		name: DataTypes.STRING
	}, {
		underscored: true,
		classMethods: {
			associate: (models) => {
				Company.hasMany(models.user, {
					foreignKey: 'company_id'
				});
			}
		}
	});

	return Company;
};

module.exports = CompanyModel;