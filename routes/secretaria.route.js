const express = require('express');
const routerSecretaria = express.Router();

const {getSecretaria, insertSecretaria, updateSecretaria, getSecretarias} = require('./../controllers/secretaria.controller');

routerSecretaria.route('/')
    .get(getSecretarias)
    .post(insertSecretaria);

routerSecretaria.route('/:id')
    .get(getSecretaria)
    .put(updateSecretaria);

module.exports = routerSecretaria;