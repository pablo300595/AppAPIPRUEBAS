const express = require('express');
const routerJefe = express.Router();

const {getJefe, insertJefe, updateJefe, getJefes} = require('./../controllers/jefe.controller');

routerJefe.route('/')
    .get(getJefes)
    .post(insertJefe);

routerJefe.route('/:id')
    .get(getJefe)
    .put(updateJefe);

module.exports = routerJefe;