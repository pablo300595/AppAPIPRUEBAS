const mongoose = require('mongoose');
const {Schema} = mongoose;

const PeriodoSchema =  new Schema ({
    periodo : {type: String, required: true},
    añoPeriodo : {type: String, required : true},
    fechaApertura :{ type: Date, required: true},
    fechaCierre :{ type: Date, required: false},
    activo : {type: Boolean, required: true},
    alumnos : {type: Number, required: false}
});

module.exports = mongoose.model('Periodo', PeriodoSchema);
