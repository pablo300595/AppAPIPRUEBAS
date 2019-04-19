const Jefe = require('./../models/jefe.model');

module.exports = {
    getJefes: async(req,res) => {
        const jefes = await Jefe.find();
        res.json(jefes);
    },
    getJefe: async(req, res) => {
        const jefe = await Jefe.findById({_id:req.params.id});
        res.json(jefe);
    },
    insertJefe: async(req,res) => {
        const jefe = new Jefe(req.body);
        await jefe.save();
        res.json({'status':'jefe guardado'});
    },
    updateJefe: async(req, res) => {
        const {id} = req.params;
        const jefe = {
            firstName: req.body.firstName,
            lastNameFather: req.body.lastNameFather,
            lastNameMother: req.body.lastNameMother,
            registrationDate: req.body.registrationDate,
        };
        await Jefe.findByIdAndUpdate(id, {$set: jefe}, {new: true});
        res.json({'status':'jefe actualizado'});
    }
}