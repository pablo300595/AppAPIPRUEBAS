const express = require('express');
const routerMovement = express.Router();

const { getMovement, getMovements, registerMovement} = require('./../controllers/secretaria-movement.controller');

routerMovement.route('/')
    .get(getMovements)
    .post(registerMovement);

routerMovement.route('/:id')
    .get(getMovement);

module.exports = routerMovement;