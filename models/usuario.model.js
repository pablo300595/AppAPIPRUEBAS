const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema=new Schema({
    alumno: { type: Schema.ObjectId, ref: 'Alumno' },
    secretaria: { type: Schema.ObjectId, ref: 'Secretaria' }, 
    jefe: { type: Schema.ObjectId, ref: 'Jefe' },  
    user: {type:String, required:true},
    pass: {type:String, required:true},
    active: {type: Boolean, required:true},
    credential:{type: String, required:true},
    career: {type: [String], required:false}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);