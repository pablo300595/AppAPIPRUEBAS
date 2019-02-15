const express = require('express');
const routerAlumno = express.Router();
const {getAlumnos,insertAlumno,getAlumno,updateAlumno,deleteAlumno,updateAlumnoInscripcionStatus,getAlumnoStatusInscripcion, updateAlumnoByCtrlNumber} = require('../controllers/alumno.controller');

routerAlumno.route('/')
    .get(getAlumnos)
    .post(insertAlumno);

routerAlumno.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno);

routerAlumno.route('/ctrl/:id')
    .put(updateAlumnoByCtrlNumber)

routerAlumno.route('/status/:id')
    .put(updateAlumnoInscripcionStatus)
    .post(updateAlumnoInscripcionStatus)
    .get(getAlumnoStatusInscripcion);

module.exports = routerAlumno;