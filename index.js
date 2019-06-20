const express = require("express");
const app = express();
const usuarios = require('./rotas/usuarios');


app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.use('/usuarios', usuarios);

app.listen(3000, () => {
    console.log('API escutando na porta 3000');
})