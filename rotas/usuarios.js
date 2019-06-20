const express = require("express");
const router = express.Router();
const modelUsuario = require('../models/usuario');

const multer = require('multer'), 
    multers3 = require('multer-s3'),
    path = require('path'),
    AWS = require('aws-sdk');


AWS.config.loadFromPath('s3_config.json');
const s3 = new AWS.S3();


const upload = multer({
    storage: multers3({
        s3: s3,
        acl: 'public-read',
        bucket: 'compartilhagram',
        contentType: function(req, file, cb) {
            cb(null, file.mimetype);
        },
        metadata: function (req, file, cb) {           
            cb(null, { fieldName: file.fieldname, contentType: file.mimetype });
        },
        key: function (req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        }
    })
});



router.get('/', (req, res) => {
    modelUsuario.find((err, usuarios)=>{
        res.send({usuarios: usuarios}); 
    });
});

router.post('/cadastrar', upload.single('avatar'), (req, res) => {
    const dados = req.body;
    const novoUsuario = new modelUsuario({nome: dados.nome, login: dados.login, avatar: req.file.location});
    novoUsuario.save();

    res.send({mensagem: "Novo usuário cadastrado no sistema", usuario: novoUsuario});
    
});

module.exports = router;