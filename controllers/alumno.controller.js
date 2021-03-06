const Alumno = require('./../models/alumno.model');
var mongoose = require('mongoose');

module.exports = {
    getAlumnos:async(req,res)=>{
        const alumnos = await Alumno.aggregate([
            {   
                $lookup: {
                    from: 'periodos',
                    localField: 'periodo',
                    foreignField: '_id',
                    as: 'alumno_periodo'
                }
            }
        ]);
        res.json(alumnos);
    },
    getAlumnosByCareer:async(req,res)=>{
        if(req.body[0].credential == 'chief'){
            // const alumnos = await Alumno.find();
            const alumnos = await Alumno.aggregate([
                {   
                    $lookup: {
                        from: 'periodos',
                        localField: 'periodo',
                        foreignField: '_id',
                        as: 'alumno_periodo'
                    }
                }
            ]);
            res.json(alumnos);
        }else{
            const alumnos = await Alumno.find({career: {$in: req.body[0].usuario_secretaria[0].career}});
            res.json(alumnos);
        }
    },
    /*getAlumno:async(req,res)=>{
        const alumno = await Alumno.findOne({controlNumber:req.params.id});
        res.json(alumno);
    },*/
    getAlumno:async(req,res)=>{
        const alumno = await Alumno.aggregate([
            {   
                $lookup: {
                    from: 'periodos',
                    localField: 'periodo',
                    foreignField: '_id',
                    as: 'alumno_periodo'
                }
            },
            {
                $match: {
                    controlNumber:req.params.id
                }
            }
        ]);
        res.json(alumno);
    },
    getAlumnoById:async(req,res)=>{
        const alumno = await Alumno.findById({_id:req.params.id});
        res.json(alumno);
    },
    getAlumnoByCtrl:async(req,res)=>{
        const alumno = await Alumno.findOne({controlNumber:req.params.id});
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
            controlNumber: req.body.controlNumber,
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
    updateAlumnoByCtrlNumber:async(req,res)=>{
        const alumno = {
            firstName: req.body.firstName,
            lastNameFather: req.body.lastNameFather,
            lastNameMother: req.body.lastNameMother,
            controlNumber: req.body.controlNumber,
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
            career: req.body.career
            // documents: req.body.documents
        }
        const consulta = await Alumno.findOneAndUpdate({controlNumber:req.params.id}, {$set: alumno});
        res.json({'status':'Alumno actualizado'});
    },
    updateAlumnoInscripcionStatus:async(req,res)=>{
        const {id} = req.params;
        const alumno = {
            statusInscripcion: req.body.statusInscripcion
        }
        const query = await Alumno.findByIdAndUpdate({_id: req.params.id}, {$set: {statusInscripcion: req.body.statusInscripcion}}, {new: true}).then(
            res => console.log('finished')
        );
        res.json({'status':'status inscripcion actualizado'});
    },
    updateAlumnoInscripcionStatusByCtrl:async(req,res)=>{
        const ctrl = req.params.id;
        const alumno = {
            statusInscripcion: req.body.statusInscripcion
        }
        const search = await Alumno.findOneAndUpdate({controlNumber: req.params.id}, {$set: {statusInscripcion: req.body.statusInscripcion}}, {new: true}).then(
            res => console.log('finished')
        );
        res.json({'status':'status inscripcion actualizado'});
    },
    updateAlumnoDocumentation: async(req,res)=>{
        const documentation = await Alumno.findById({_id:req.params.id},
            'documents').catch();
        const documents = documentation.documents;
        
        try{
            for(let i=0;i<documents.length;i++) {           
                if(documents[i].documentName== req.body.documentName){
                    await Alumno.findByIdAndUpdate({ _id: req.params.id }, 
                        { $pull: { documents: {_id: documents[i].id }}});
                    
                    break;
                }
            }
        }catch(e){
            console.log(e);
        }
        const documentsWithAddedElement = await Alumno.findOneAndUpdate({controlNumber: req.params.id }, 
            { $push: { documents: req.body }}); 
        res.json({'Message':'Documentation updated'});
    },
    updateAlumnoDocumentationByCtrlNumber:async(req,res)=>{
        const documentation = await Alumno.findOne({controlNumber:req.params.id},
            'documents').catch();
        const documents = documentation.documents;
        
        try{
            for(let i=0;i<documents.length;i++) {           
                if(documents[i].documentName== req.body.documentName){
                    await Alumno.findOneAndUpdate({ controlNumber: req.params.id }, 
                        { $pull: { documents: {_id: documents[i].id }}});
                    
                    break;
                }
            }
        }catch(e){
            console.log(e);
        }
        const documentsWithAddedElement = await Alumno.findOneAndUpdate({controlNumber: req.params.id }, 
            { $push: { documents: req.body }}); 
        res.json({'Message':'Documentation updated'});
       
    },
    updateAlumnoPeriodById: async(req, res) => {
        const period = mongoose.Types.ObjectId(req.body.periodo);
        await Alumno.findByIdAndUpdate({_id:req.params.id},{$set:{ periodo: period }}).catch();
        res.json({"status":"Periodo actualizado"});
    },
    insertAlumnoDocumentation:async(req,res) => {
        await Alumno.findByIdAndUpdate({_id:req.params.id},{$set:{ documents: req.body }}).catch();
        res.json({"status":"Documentación insertada"});
    },
    getAlumnoDocumentation:async(req,res)=>{
        const documentation = await Alumno.findOne({controlNumber:req.params.id},
            'documents -_id').catch();
        res.json(documentation.documents);
    },
    deleteAlumno:async(req,res)=>{
        await Alumno.findOneAndDelete({controlNumber:req.params.id});
        res.json({status: 'Alumno Eliminado'});
    },
    initDocumentation:async(req,res)=>{
        const documentation = [
            {documentName: 'CURP', status: 'En captura', observacion: ''},
            {documentName: 'ACTA', status: 'En captura', observacion: ''},
            {documentName: 'NSS', status: 'En captura', observacion: ''},
            {documentName: 'FORMULARIO', status: 'En captura', observacion: ''},
            {documentName: 'FOTO', status: 'En captura', observacion: ''},
            {documentName: 'COMPROBANTE', status: 'En captura', observacion: ''},
            {documentName: 'CLINICOS', status: 'En captura', observacion: ''},
            {documentName: 'CERTIFICADO', status: 'En captura', observacion: ''}
        ];
        const query = await Alumno.findByIdAndUpdate({_id: req.params.id}, {$set:{documents: documentation}}, {new: true});
        res.json({status: 'Alumno con documentos inicializados'});
    }

    

}