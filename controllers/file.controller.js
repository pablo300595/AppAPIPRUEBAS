const mkdirp = require('mkdirp');

module.exports= {
    uploadFile:(req,res)=>{
        const folder = req.body.usuario;   
        mkdirp(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}/documentos`, function(err) { 
            // path exists unless there was an error
        });

        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // let sampleFile = req.files.sampleFile;
        // let fileName = req.body.filename;
        //Validations
        if(req.files.sampleFile.truncated == true){
            res.json({status:'/Too Big$'});
            return res.status(500);
        }
        const application = (req.files.sampleFile.mimetype).substring(((req.files.sampleFile.mimetype).indexOf('/'))+1);
        if(application != 'pdf'){
            res.json({status:'/Invalid format$'});
            return res.status(500);
        }
        req.files.sampleFile.mv(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}/documentos/${req.body.filename}`, (err)=>{
            if (err){
                res.json({status:'Route does not exist'});
                return res.status(500).send(err);
            }
            res.send('File uploaded!');
        });
    }
}