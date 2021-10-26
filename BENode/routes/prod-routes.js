const express = require('express');
const {
    createProd,
    readProds,
    updateProd,
    deleteProd,
} = require('./../controllers/prod-controller');

// Router
const router = express.Router();

router.post('/', createProd);

router.get('/', readProds);

router.get('/:id', readProds);

router.patch('/:id', updateProd);

router.delete('/:id', deleteProd);


// GET, POST, PATCH, DELETE 
module.exports = router;