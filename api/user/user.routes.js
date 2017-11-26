const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

router.route('/')
	.get(UserController.indexAction);

module.exports = router;