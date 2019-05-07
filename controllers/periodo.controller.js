const Periodo = require('./../models/periodo.model');

module.exports = {
    getPeriodos: async(req,res) => {
        const periodos = await Periodo.find();
        res.json(periodos);
    },
    getPeriodo: async(req, res) => {
        const periodo = await Periodo.findById({_id:req.params.id});
        res.json(periodo);
    },
    
    insertPeriodo: async(req,res) => {
        const periodo = new Periodo(req.body);
        await periodo.save();
        res.json({'status':'periodo guardado'});
    },
    
    updatePeriodo:async(req,res)=>{
        const {id} = req.params;
        const periodo = {
            periodo : req.body.periodo,
            añoPeriodo : req.body.añoPeriodo,
            fechaApertura : req.body.fechaApertura,
            fechaCierre : req.body.fechaCierre,
            activo : req.body.activo,
            alumnos : req.body.alumnos

        }
        await Periodo.findByIdAndUpdate(id, {$set: periodo}, {new: true});
        res.json({'status':'Periodo actualizado'});
    }


}