const multer = require('multer'), 
    multers3 = require('multer-s3'),
    path = require('path'),
    AWS = require('aws-sdk');
const config = require('../config');


AWS.config = new AWS.Config({
    accessKeyId: config.AWSAccessKeyId,
    secretAccessKey: config.AWSSecretAccessKey,
    region: config.AWSRegion
})

const s3 = new AWS.S3();


const upload = multer({
    storage: multers3({
        s3: s3,
        acl: 'public-read',
        bucket: 'compartilhagram',
        contentType: function(req, file, cb) {
            cb(null, file.mimetype);
        },
        metadata: function (req, file, cb) {           
            cb(null, { fieldName: file.fieldname, contentType: file.mimetype });
        },
        key: function (req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        }
    })
});

module.exports = upload;