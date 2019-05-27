const express = require('express');
const routerSecretaria = express.Router();

const {getSecretaria, insertSecretaria, updateSecretaria, getSecretarias,
updateSecretariaCareer} = require('./../controllers/secretaria.controller');

routerSecretaria.route('/')
    .get(getSecretarias)
    .post(insertSecretaria);

routerSecretaria.route('/:id')
    .get(getSecretaria)
    .put(updateSecretaria);

routerSecretaria.route('/career/:id')
    .put(updateSecretariaCareer);

module.exports = routerSecretaria;