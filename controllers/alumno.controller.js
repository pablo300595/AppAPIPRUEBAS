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
    getAlumnoStatusInscripcion:async(req,res)=>{
        const alumno = await Alumno.findById({_id:req.params.id},{'statusInscripcion':1,'_id':0});
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
            firstName: req.body.firstName,
            lastNameFather: req.body.lastNameFather,
            lastNameMother: req.body.lastNameMother,
            placeBirth: req.body.placeBirth,
            dateBirth: req.body.dateBirth,
            statusCivil: req.body.statusCivil,
            email: req.body.email,
            curp: req.body.curp,
            nss: req.body.nss,
            street: req.body.street,
            colony: req.body.colony,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            phone: req.body.phone,
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
    updateAlumnoInscripcionStatus:async(req,res)=>{
        const {id} = req.params;
        const alumno = {
            statusInscripcion: req.body.statusInscripcion
        }
        await Alumno.findOneAndUpdate(id, {$set: alumno}, {new: true});
        res.json({'status':'status inscripcion actualizado'});
    },
    deleteAlumno:async(req,res)=>{
        await Alumno.findByIdAndRemove(req.params.id);
        res.json({status: 'Alumno Eliminado'});
    }
}