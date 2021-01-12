const express = require('express');
const delegadoRouter = express.Router();

const delegado = require('../controllers/delegado.controller');


delegadoRouter.get('/', delegado.getDelegados);
delegadoRouter.post('/', delegado.createDelegado);
delegadoRouter.get('/:id', delegado.getDelegado);
delegadoRouter.put('/:id', delegado.editDelegado);
delegadoRouter.delete('/:id', delegado.deleteDelegado);


module.exports = delegadoRouter;