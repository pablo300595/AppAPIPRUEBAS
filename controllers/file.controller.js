const mkdirp = require('mkdirp');

module.exports= {
    uploadFile:(req,res)=>{
        const folder = 'nuevo';   
        mkdirp(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}`, function(err) { 
            // path exists unless there was an error
        });

        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }
        let sampleFile = req.files.sampleFile;
        let fileName = sampleFile.name;

        if(sampleFile.truncated == false){
            sampleFile.mv(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}/${fileName}`, (err)=>{
                if (err){
                    console.log('ERROR');
                    return res.status(500).send(err);
                }
                res.send('File uploaded!');
            });
        }else{
            res.json({status:'Too Big'});
        }
    }
}