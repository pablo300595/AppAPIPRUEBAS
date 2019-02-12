const express = require('express');
const routerAlumno = express.Router();
const {getAlumnos,insertAlumno,getAlumno,updateAlumno,deleteAlumno,updateAlumnoInscripcionStatus,getAlumnoStatusInscripcion} = require('../controllers/alumno.controller');

routerAlumno.route('/')
    .get(getAlumnos)
    .post(insertAlumno);

routerAlumno.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno);

routerAlumno.route('/status/:id')
    .put(updateAlumnoInscripcionStatus)
    .post(updateAlumnoInscripcionStatus)
    .get(getAlumnoStatusInscripcion);

module.exports = routerAlumno;