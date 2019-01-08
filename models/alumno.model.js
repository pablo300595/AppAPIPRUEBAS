const mongoose = require('mongoose');
const { Schema } =mongoose;

const AlumnoSchema=new Schema({
    firstName: {type:String, required:false},
    lastNameFather: {type:String, required:false},
    lastNameMother: {type:String, required:false},
    placeBirth: {type:String, required:false},
    dateBirth: {type:String, required:false},
    statusCivil: {type:String, required:false},
    street: {type:String, required:false},
    colony: {type:String, required:false},
    city: {type:String, required:false},
    state: {type:String, required:false},
    postalCode: {type:String, required:false},
    phone: {type:String, required:false},
    email: {type:String, required:false},
    etnia: {type:String, required:false},
    otherEtnia: {type:String, required:false},
    disability: {type:String, required:false},
    whichDisability: {type:String, required:false},
    school: {type:String, required:false},
    otherSchool: {type:String, required:false},
    nameSchool: {type:String, required:false},
    average: {type:String, required:false},
    career: {type:String, required:false},
    documents: {type: [String], required:false},
    validated:{type: Boolean, required:false}
});

module.exports = mongoose.model('Alumno',AlumnoSchema);