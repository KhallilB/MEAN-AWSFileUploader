let express = require('express');
let router = express.Router();

let upload = require('../config/multer.config');

const awsWorker = require('../controllers/s3.controller');

router.post('/aoi/files/upload', upload.single("file"), awsWorker.doUpload);

router.get('/api/files/all', awsWorker.listKeyNames);

module.exports = router;