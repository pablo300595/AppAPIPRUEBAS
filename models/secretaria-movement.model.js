const mongoose = require('mongoose');
const {Schema} = mongoose;

const SecretariaMovementSchema = new Schema({
    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    secretaria: {type: Schema.ObjectId, ref: 'Secretaria'},
    alumno: {type: Schema.ObjectId, ref: 'Alumno'},
    document: {type: String, required: true},
    action: {type:String, required:true},
    dateModificationServer: {type: Date, required: true},
    dateModificationClient: {type: Date, required: true},
    dataModified: {type: String, required: true}
});

module.exports = mongoose.model('SecretariaMovement',SecretariaMovementSchema);