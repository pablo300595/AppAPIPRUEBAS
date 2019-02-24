const express = require('express');
const app = express();
const alumnoRoutes = require('./routes/alumnos.route');
const loginRoutes = require('./routes/login.route');
const usuarioRoutes = require('./routes/usuarios.route');
const fileRoutes = require('./routes/file.route');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const {mongoose} = require ('./db');
//config
app.set('port',process.env.PORT || 3000);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control');
    next();
});
//files
app.use(fileUpload({
    limits: { fileSize: 1000000 }
}));
app.use(express.static('public'));
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.get('/', (req, res) => {return res.send('Hello')});
app.use('/alumnos',alumnoRoutes);
app.use('/login',loginRoutes);
app.use('/usuarios',usuarioRoutes);
app.use('/upload',fileRoutes);

//server
app.listen(app.get('port'),()=>{
    console.log('Served started!!!');
});