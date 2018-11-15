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
        const {name} = req.params;
        const alumno = {
            name:req.body.name,
            email:req.body.email
        }
        await Alumno.findOneAndUpdate(name, {$set: alumno}, {new: true});
        res.json({'status':'Alumno actualizado'});
    },
    deleteAlumno:async(req,res)=>{
        await Alumno.findByIdAndRemove(req.params.id);
        res.json({status: 'Alumno Eliminado'});
    }
}