const express = require('express');
const routerLogin = express.Router();
const { authUser } = require('../controllers/login.controller');

routerLogin.route('/auth')
    .post(authUser);

module.exports = routerLogin;