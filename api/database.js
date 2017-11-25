const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config.options);
const db = {};

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
		let model = require(file);
		let instance = new model();

		sequelize.importCache[file] = instance.define(sequelize, Sequelize.DataTypes);
		db[model.name] = sequelize.importCache[file];
	});

Object.keys(db).forEach(function(modelName) {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

module.exports = sequelize;