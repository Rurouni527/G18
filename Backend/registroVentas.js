const express = require('express');



const app = express();

app.get("/", function (request, response) {
    response.send("Hola!")
})

app.listen(8080);