const connect = require('./connect/db');


const Post = connect.model('Post', {
    autor: {nome: String, login: String, avatar: String}, 
    imagem: String, 
    curtidas: Number, 
    comentarios: [{texto: String, autor: {nome: String, login: String, avatar: String}}], 
    legenda: String
});


module.exports = Post;