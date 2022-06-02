const express = require('express')
const app = express();
const routething = require('./route.js')
const hostname = '194.156.79.130';
const port = 8000;


app.use("", routething);


app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
})
