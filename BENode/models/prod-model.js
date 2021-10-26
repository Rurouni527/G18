const mongoose = require('mongoose');
const { Schema } = mongoose;

const prodSchema = new Schema({
    // _id: String,
    idProducto: {
        type: String,
        required: true
    },
    descrProducto: {
        type: String,
        required: true
    },
    fileNamePhoto: {
        type: String,
        required: true
    },
    valorUnitario: {
        type: String,
        required: true
    },
    available: Boolean
});

module.exports = mongoose.model('prodMaster', prodSchema, 'prodMaster');