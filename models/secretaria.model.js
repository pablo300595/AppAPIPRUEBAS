const mongoose = require('mongoose');
const {Schema} = mongoose;

const SecretariaSchema = new Schema({
    firstName: {type:String, required:true},
    lastNameFather: {type:String, required:true},
    lastNameMother: {type:String, required:true},
    registrationDate: {type: Date, required: true},
    career: {type: [String], required:false}
});

module.exports = mongoose.model('Secretaria', SecretariaSchema);