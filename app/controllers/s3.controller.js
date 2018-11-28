const s3 = require('../config/s3.config');

exports.doUpload = (req, res) => {
    const params = {
        Bucket: process.env.Bucket,
        Key: req.file.originalname,
        Body: req.file.buffer
    }

    s3.upload(params, (err, data) => {
        if (err) {
            res.status(500).send("Error " + err);
        }
        res.send("File Uploaded! The file is " + req.file.originalname);
    });
}


exports.listKeyNames =(req, res) => {
    const params = {
        Bucket: process.env.Bucket
    }

    var keys = [];
    s3.listObjectsV2(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            res.send("error: " + err);
        } else {
            var contents = data.Contents
            contents.forEach(function (content) {
                keys.push(content.Key);
            })
            res.send(keys)
        }
    });
}

