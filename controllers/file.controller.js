const mkdirp = require('mkdirp');
const Client = require('ftp');
const FTPCONFIG = {   
    host:"files.000webhost.com",
    port: 21, 
    user: "novaresidencia", 
    password: "2g8v-obf3-grq2"
};

module.exports= {
    uploadFile:(req,res)=>{
        const folder = req.body.usuario;
        let client = new Client();   
        mkdirp(`/home/pablo/Escritorio/ftp/${folder}/documentos`, function(err) { 
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

        client.on('ready', function() {
            console.log(req.body);
            /*req.files.file.mv(`/home/pablo/Escritorio/ftp/${folder}/documentos/${req.body.filename}`, (err)=>{
                if (err){
                    res.json({status:'Route does not exist'});
                    return res.status(500).send(err);
                }
            });*/
            client.put(req.files.file.data, `/public_html/${folder}/documentos/${req.body.filename}`, function(err) {
                if (err) throw err;client.end();
            });
            res.send('File uploaded!');
        });
        client.connect(FTPCONFIG);

        
    }
}