const mongoose = require("mongoose");
const dbUrl = require('../../config').DBUrl;

mongoose.connect(dbUrl, {useNewUrlParser: true});

module.exports = mongoose;