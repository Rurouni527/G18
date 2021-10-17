const mongoose = require('mongoose');
const {Schema} = mongoose;

const misionTic = new Schema({

    idVenta: String,

    idCliente: String,

    idVendedor: String,

    idProducto: String,

    catidad: String,

    valorTotal: String,

    fechaPago: String,

    estadoVenta: String,

});

module.exports = mongoose.model("RegistroVentas", misionTic);