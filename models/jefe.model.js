const mongoose = require('mongoose');
const {Schema} = mongoose;

const JefeSchema = new Schema({
    firstName: {type:String, required:true},
    lastNameFather: {type:String, required:true},
    lastNameMother: {type:String, required:true},
    registrationDate: {type: Date, required: true}
});

module.exports = mongoose.model('Jefe', JefeSchema);