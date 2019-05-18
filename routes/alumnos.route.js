const express = require('express');
const routerAlumno = express.Router();
const {getAlumnos,insertAlumno,getAlumno,updateAlumno,deleteAlumno,
    updateAlumnoInscripcionStatus,getAlumnoStatusInscripcion, 
    updateAlumnoByCtrlNumber, getAlumnoById, updateAlumnoDocumentation,
    updateAlumnoDocumentationByCtrlNumber, getAlumnoDocumentation,
    insertAlumnoDocumentation, getAlumnosByCareer, updateAlumnoInscripcionStatusByCtrl,
    updateAlumnoPeriodById} = require('../controllers/alumno.controller');

routerAlumno.route('/')
    .get(getAlumnos)
    .post(insertAlumno);

routerAlumno.route('/career')
    .post(getAlumnosByCareer);

routerAlumno.route('/:id')
    .get(getAlumno)
    .put(updateAlumno)
    .delete(deleteAlumno);

routerAlumno.route('/ctrl/:id')
    .put(updateAlumnoByCtrlNumber)

routerAlumno.route('/id/:id')
    .get(getAlumnoById)

routerAlumno.route('/status/:id')
    .put(updateAlumnoInscripcionStatus)
    .post(updateAlumnoInscripcionStatus)
    .get(getAlumnoStatusInscripcion);

routerAlumno.route('/documentation/:id')
    .get(getAlumnoDocumentation)
    .post(insertAlumnoDocumentation)
    .put(updateAlumnoDocumentation);

routerAlumno.route('/documentation/ctrl/:id')
    .put(updateAlumnoDocumentationByCtrlNumber);

routerAlumno.route('/status/ctrl/:id')
    .put(updateAlumnoInscripcionStatusByCtrl);

routerAlumno.route('/periodo/:id')
    .put(updateAlumnoPeriodById);
module.exports = routerAlumno;