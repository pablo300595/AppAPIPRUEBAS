const Secretaria = require('./../models/secretaria.model');

module.exports = {
    getSecretarias:async(req,res)=>{
        const secretarias = await Secretaria.find();
        res.json(secretarias);
    },
    getSecretaria:async(req,res)=>{
        const secretaria = await Secretaria.findById({_id:req.params.id});
        res.json(secretaria);
    },
    insertSecretaria:async(req,res)=>{
        const secretaria = new Secretaria(req.body);
        await secretaria.save();
        res.json({'status':'secretaria guardada'});
    },
    updateSecretaria: async(req,res) => {
        const {id} = req.params;
        const secretaria = {
            firstName: req.body.firstName,
            lastNameFather: req.body.lastNameFather,
            lastNameMother: req.body.lastNameMother,
            registrationDate: req.body.registrationDate,
            career: req.body.career
        };
        await Secretaria.findByIdAndUpdate(id, {$set: secretaria}, {new: true});
        res.json({'status':'Secretaria actualizada'});
    }
}