const express = require('express');
const usuariosLogin = express.Router();
const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/usuario.controller');

usuariosLogin.route('/')
    .get(getUsers)
    .post(createUser);

usuariosLogin.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = usuariosLogin;