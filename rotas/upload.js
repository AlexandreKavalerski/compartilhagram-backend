const multer = require('multer'),
    path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // error first callback
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {

        // error first callback
        cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`)
    }
});


const upload = multer({
    storage
});

module.exports = upload;