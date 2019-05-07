const express = require('express');
const routerPeriodo = express.Router();

const { getPeriodo, insertPeriodo, getPeriodos, updatePeriodo } = require('./../controllers/periodo.controller');

routerPeriodo.route('/')
    .get(getPeriodos)
    .post(insertPeriodo);

routerPeriodo.route('/:id')
    .get(getPeriodo)
    .put(updatePeriodo);




module.exports = routerPeriodo;