const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema=new Schema({
    alumno: { type: Schema.ObjectId, ref: 'Alumno' }, 
    user: {type:String, required:true},
    pass: {type:String, required:true},
    active: {type: Boolean, required:true},
    credential:{type: String, required:true}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);