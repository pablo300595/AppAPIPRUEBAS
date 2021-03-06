const Movement = require('./../models/secretaria-movement.model');

module.exports = {
    getMovements: async (req,res) => {
        const movements = await Movement.aggregate([
            {
                $lookup: {
                    from: 'secretarias',
                    localField: 'secretaria',
                    foreignField: '_id',
                    as: 'movement_secretaria'
                  }
            },
            {
                $lookup: {
                    from: 'alumnos',
                    localField: 'alumno',
                    foreignField: '_id',
                    as: 'movement_alumno'
                  }
            }
        ]);
        for(let i=0;i<movements.length; i++) {
            movements[i].dateModificationServer = new Date();
        }
        res.json(movements);
    },
    getMovement: async (req,res) => {
        const movement = await Movement.findById({_id:req.params.id});
        res.json(movement);
    },
    registerMovement: async (req,res) => {
        const movement = new Movement(req.body);
        await movement.save();
        res.json({'status':'Movimiento registrado'});
    }
}