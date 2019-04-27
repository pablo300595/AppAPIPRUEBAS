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
    }


}