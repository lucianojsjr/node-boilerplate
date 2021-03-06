const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

let db = {};

const readAll = (dir, filelist = []) => {
	fs.readdirSync(dir).forEach(file => {
		filelist = fs.statSync(path.join(dir, file)).isDirectory()
			? readAll(path.join(dir, file), filelist)
			: filelist.concat(path.join(dir, file));
	});

	return filelist;
};

readAll(__dirname, [])
	.filter((file) => {
		return file.indexOf('model.js') !== -1;
	})
	.forEach((file) => {
		const model = sequelize.import(file);

		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if ('classMethods' in db[modelName].options) {
		if ('associate' in db[modelName].options.classMethods) {
			db[modelName].options.classMethods.associate(db);
		}
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;