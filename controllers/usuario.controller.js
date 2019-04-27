const Usuario = require('../models/usuario.model');

module.exports = {
    getUsers: async(req,res)=>{
        /*const users = await Usuario.find();
        res.json(users);*/
        const users  =await Usuario.aggregate([
            {
              $lookup: {
                from: 'alumnos',
                localField: 'alumno',
                foreignField: '_id',
                as: 'usuario_alumno'
              }
            }
          ]);
        res.json(users);
    },
    /*getUser: async(req,res)=>{
        const searchedUser = await Usuario.findOne({user:req.params.id});
        res.json(searchedUser);
    },*/
    getUser: async(req,res)=>{
        const searchedUser = await Usuario.aggregate([
            {   
                $lookup: {
                    from: 'alumnos',
                    localField: 'alumno',
                    foreignField: '_id',
                    as: 'usuario_alumno'
                }
            },
            {   
                $lookup: {
                    from: 'secretarias',
                    localField: 'secretaria',
                    foreignField: '_id',
                    as: 'usuario_secretaria'
                }
            },
            {   
                $lookup: {
                    from: 'jeves',
                    localField: 'jefe',
                    foreignField: '_id',
                    as: 'usuario_jefe'
                }
            },
            {
                $match: {
                    user:req.params.id
                }
            }
        ]);
        res.json(searchedUser);
    },
    createUser: async(req,res)=>{
        const user = new Usuario(req.body);
        await user.save();
        res.json({'status':'Usuario guardado'});
    },
    deleteUser: async(req,res)=>{
        await Usuario.findOneAndDelete({user:req.params.id});
        res.json({status: 'Usuario Eliminado'});
    },
    updateUser: async(req,res)=>{
        const {id} = req.params;
        const newUser = {
            user:req.body.user,
            pass:req.body.pass,
            active:req.body.active,
            credential:req.body.credential,
            alumno:req.body.alumno
        }
        await Usuario.findByIdAndUpdate(id, {$set: newUser}, {new: true});
        res.json({'status':'Usuario actualizado'});
    }
}