const express = require('express');
const routerPeriodo = express.Router();

const {getPeriodo, insertPeriodo, getPeriodos} = require('./../controllers/periodo.controller');

routerPeriodo.route('/')
    .get(getPeriodos)
    .post(insertPeriodo);

routerPeriodo.route('/:id')
    .get(getPeriodo)
   

module.exports = routerPeriodo;