const express = require('express');

require('./driver/mongo');


const app = express();

app.get("/", function (request, response) {
    response.send("Hola!")
})

app.listen(8080);
