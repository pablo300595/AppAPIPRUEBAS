const Alumno = require('./../models/alumno.model');

module.exports = {
    getAlumnos:async(req,res)=>{
        const alumnos = await Alumno.find();
        res.json(alumnos);
    },
    getAlumno:async(req,res)=>{
        const alumno = await Alumno.findOne({ctrlNumber:req.params.id});
        res.json(alumno);
    },
    insertAlumno:async(req,res)=>{
        const alumno = new Alumno(req.body);
        await alumno.save();
        res.json({'status':'Alumno guardado'});
    },
    updateAlumno:async(req,res)=>{
        const {id} = req.params;
        const alumno = {
            name: req.body.name,
            placeBirth: req.body.placeBirth,
            dateBirth: req.body.dateBirth,
            statusCivil: req.body.statusCivil,
            street: req.body.street,
            colony: req.body.colony,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            phone: req.body.phone,
            email: req.body.email,
            etnia: req.body.etnia,
            otherEtnia: req.body.otherEtnia,
            disability: req.body.disability,
            whichDisability: req.body.whichDisability,
            school: req.body.school,
            otherSchool: req.body.otherSchool,
            nameSchool: req.body.nameSchool,
            average: req.body.average,
            career: req.body.career,
            documents: req.body.documents
        }
        await Alumno.findByIdAndUpdate(id, {$set: alumno}, {new: true});
        res.json({'status':'Alumno actualizado'});
    },
    deleteAlumno:async(req,res)=>{
        await Alumno.findByIdAndRemove(req.params.id);
        res.json({status: 'Alumno Eliminado'});
    }
}