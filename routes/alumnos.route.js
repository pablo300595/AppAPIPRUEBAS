const express = require('express');
const routerAlumno = express.Router();
const {getAlumnos,insertAlumno,getAlumno,updateAlumno,deleteAlumno} = require('../controllers/alumno.controller');

routerAlumno.route('/')
    .get(getAlumnos)
    .post(insertAlumno);

routerAlumno.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno);
module.exports = routerAlumno;