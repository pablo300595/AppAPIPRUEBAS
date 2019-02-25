const mkdirp = require('mkdirp');
const jsftp = require("jsftp");

const Ftp = new jsftp({
  host: "files.000webhost.com",
  port: 21,
  user: "filetestresidence",
  pass: "2g8v-obf3-grq2"
});

module.exports= {
    uploadFile:(req,res)=>{
        const folder = req.body.usuario;   
        mkdirp(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}/documentos`, function(err) { 
            // path exists unless there was an error
        });

        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        //Validations
        if(req.files.file.truncated == true){
            res.json({status:'/Too Big$'});
            return res.status(500);
        }
        const application = (req.files.file.mimetype).substring(((req.files.file.mimetype).indexOf('/'))+1);
        if(application != 'pdf' && application != 'png' && application != 'jpeg'){
            res.json({status:'/Invalid format$'});
            return res.status(500);
        }

        if (application == 'png') {
            if(!req.body.isImage){
                res.json({status:'/Invalid format$'});
                return res.status(500);
            }
            req.body.filename += '.png';
        }

        if (application == 'jpeg') {
            if(!req.body.isImage){
                res.json({status:'/Invalid format$'});
                return res.status(500);
            }
            req.body.filename += '.jpg';
        }

        /*Ftp.put(buffer, "path/to/remote/file.txt", err => {
            if (!err) {
              console.log("File transferred successfully!");
            }
        });*/

        ftp.get("13400501/Glossary_English_MOOCs.pdf", "home/pablo/Escritorio/ftp/file.pdf", err => {
            if (hadErr) {
              return console.error("There was an error retrieving the file.");
            }
            console.log("File copied successfully!");
        });

        req.files.file.mv(`/home/pablo/Escritorio/WEB-Dev/projects/APPAPIPRUEBAS/upload/${folder}/documentos/${req.body.filename}`, (err)=>{
            if (err){
                res.json({status:'Route does not exist'});
                return res.status(500).send(err);
            }
            res.send('File uploaded!');
        });
    }
}