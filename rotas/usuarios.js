const express = require("express");
const router = express.Router();
const modelUsuario = require('../models/usuario');

const upload = require('./upload');

router.post('/autenticar', (req, res) => {
    dados = req.body;
    
    modelUsuario.findOne({login: dados.login}, (err, usuario)=>{        
        res.send({usuario: usuario}); 
    });
});

router.post('/cadastrar', upload.single('avatar'), (req, res) => {
    const dados = req.body;
    const novoUsuario = new modelUsuario({nome: dados.nome, login: dados.login, avatar: req.file.location});
    novoUsuario.save();

    res.send({mensagem: "Novo usuário cadastrado no sistema", usuario: novoUsuario});
    
});

router.post('/upload', upload.single('arquivo'), (req, res) => {
    console.log(req.file.path);
    res.send({mensagem: `Novo arquivo ('${req.file.path }') cadastrado no sistema`});
    
});

module.exports = router;