const connect = require('./connect/db');

const Usuario = connect.model('Usuario', {nome: String, login: String, avatar: String});

module.exports = Usuario;