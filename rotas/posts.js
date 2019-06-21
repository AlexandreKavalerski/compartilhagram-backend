const express = require("express");
const router = express.Router();
const modelPost = require('../models/post');

const upload = require('./upload');

router.get('/', (req, res) => {
    modelPost.find((err, posts)=>{        
        res.send({posts: posts}); 
    });
});

router.post('/cadastrar', upload.single('imagem'), (req, res) => {
    const dados = req.body;  
    
    const novoPost = new modelPost(
        {
        autor: { nome: dados.nomeAutor, avatar: dados.avatarAutor, login: dados.loginAutor }, 
        curtidas: 0, 
        legenda: dados.legenda, 
        imagem: req.file.location
    });
    novoPost.save();

    res.send({mensagem: "Novo post cadastrado no sistema", post: novoPost});
    
});

module.exports = router;