const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

let router = require('./app/routers/s3.router');
app.use('/', router);

const server = app.listen(6600, function() {
    let port = server.address().port
    console.log("App listening at " + port)
});