const express = require("express");
const router = express.Router();
const modelUsuario = require('../models/usuario');


router.get('/', (req, res) => {
    modelUsuario.find((err, usuarios)=>{
        res.send({usuarios: usuarios}); 
    });
});


module.exports = router;