const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/compartilhagram', {useNewUrlParser: true});

module.exports = mongoose;