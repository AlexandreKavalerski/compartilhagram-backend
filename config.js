const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    Port: process.env.PORT,
    AWSAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    AWSSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    AWSRegion: process.env.AWS_REGION,
    DBUrl: process.env.DB_URL
}