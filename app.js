const express = require('express');
const app = express();
const alumnoRoutes = require('./routes/alumnos.route');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {mongoose} = require ('./db');
//config
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use('/alumnos',alumnoRoutes);
//server
app.listen(3000,()=>{
    console.log('Served started!!!');
});