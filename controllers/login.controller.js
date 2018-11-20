const Usuario = require('../models/usuario.model');

module.exports = {
    authUser:async(req,res)=>{
        let doesAccountExist = false;
        const searchedUser = await  Usuario.findOne({
            user:req.body.user,
            pass:req.body.pass
        });
        if(searchedUser!=null){
            doesAccountExist = true;
        }
        res.json(searchedUser);
        console.log('AccountExists?'+doesAccountExist);    
    }
}