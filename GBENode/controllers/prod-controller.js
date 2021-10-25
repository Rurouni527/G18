// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const prodColl = require('./../models/prod-model');

// POST
const createProd = (request, response) => {
    const prod = request.body;
    if (!prod.descrProducto) {
        return response.status(400).send({ ok: false });
    }

    const newProd = new prodColl(prod);
    newProd.save((error, result) => {
        if (error) {
            return response.status(500).send({ error });
        }
        return response.send(result);
    });
};

// GET
const readProds = (request, response) => {
    const id = request.params.id;

    const filter = {};
    if (id) {
        filter.idProducto = id;
    }

    prodColl.find(filter, (error, result) => {
        if (error) {
            return response.status(500).send({ error });
        }
        return response.send(result);
    });
};

// PATCH
const updateProd = (request, response) => {
    const id = request.params.id;
    if (!id) {
        return response.status(400).send({ error: 'No hay id, para modificar' });
    }

    prodColl.updateOne({ idProducto: id }, request.body, (error, result) => {
        if (error) {
            return response.status(500).send({ error });
        }

        prodColl.find({ idProducto: id }, (error, result) => {
            if (error) {
                return response.status(500).send({ error });
            }
            return response.send(result);
        });
    });
};

// DELETE
const deleteProd = (request, response) => {
    const id = request.params.id;
    if (!id) {
        return response.status(400).send({ error: 'No hay id, para eliminar' });
    }
    prodColl.deleteOne({ idProducto: id }, (error, result) => {
        if (error) {
            return response.status(500).send({ error });
        }
        return response.send(result);
    });
};

module.exports = {
    createProd,
    readProds,
    updateProd,
    deleteProd,
};