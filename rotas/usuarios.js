const express = require("express");
const router = express.Router();
const modelUsuario = require('../models/usuario');


router.get('/', (req, res) => {
    modelUsuario.find((err, usuarios)=>{
        res.send({usuarios: usuarios}); 
    });
});

router.post('/cadastrar', (req, res) => {
    const dados = req.body;
    const novoUsuario = new modelUsuario({nome: dados.nome, login: dados.login, avatar: dados.avatar});
    novoUsuario.save();

    res.send({mensagem: "Novo usuário cadastrado no sistema", usuario: novoUsuario});
    
});


module.exports = router;