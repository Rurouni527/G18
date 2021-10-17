const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://Rurouni:elpato90@misiontic.g32hc.mongodb.net/RegistroVentas";


mongoose.set("runValidators", true);

const db = mongoose.connect(mongoUrl, {useNewUrlParser: true}, {useNewUrlParser: true},
    (error) => {
        if (error){
            console.log("Error conectando a mongo");
        } else{
            console.log("Conectado a mongo")
        }
    }
    );

    module.exports = db; 