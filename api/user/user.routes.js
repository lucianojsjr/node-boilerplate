const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

router.route('/')
	.get(UserController.indexAction);

router.route('/:user_id')
	.get(UserController.indexAction);

module.exports = router;