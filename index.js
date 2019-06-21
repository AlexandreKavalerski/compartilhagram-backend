const express = require('express');
const app = express();

const usuarios = require('./rotas/usuarios');
const posts = require('./rotas/posts');

const porta = require('./config').Port;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Compartilhagram API v0.0.1');
});

app.use('/usuarios', usuarios);
app.use('/posts', posts);

app.listen(porta, () => {
    console.log(`API escutando na porta ${porta}`);
})