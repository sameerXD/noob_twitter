const express = require('express');
const router = express.Router();

const userController = require('../controller/usersController');

router.route('/')
    .post(userController.createUser)

router.route('/:email')
    .get(userController.getUser);

router.route('/:email')
    .put(userController.updateUser);

module.exports = router;