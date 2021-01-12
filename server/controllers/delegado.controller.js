const delegado = require('../models/delegado');
const delegadoCtrl = {};

delegadoCtrl.getDelegados = async (req, res) => {
    const delegados = await delegado.find();
    res.json(delegados); 
}

delegadoCtrl.createDelegado = async (req, res) => {
    const del = new delegado({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        email: req.body.email,
        telefono: req.body.telefono,
        celular: req.body.celular,
        direccion: req.body.direccion,
    });
    await del.save();
    res.json({
        'status': 'delegado Guardado'
    });
}

delegadoCtrl.getDelegado = async (req, res) => {
    const del = await delegado.findById(req.params.id);
    res.json(del);
}

delegadoCtrl.editDelegado = async (req, res) => {
    const { id } = req.params;
    const ndel = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        email: req.body.email,
        telefono: req.body.telefono,
        celular: req.body.celular,
        direccion: req.body.direccion,
    };
    await delegado.findByIdAndUpdate(id, {$set: ndel}, {new: true});
    res.json({status: 'delegado Actualizado'});
}

delegadoCtrl.deleteDelegado = async (req, res) => {
    await delegado.findByIdAndRemove(req.params.id);
    res.json({status: 'delegado Eliminado'});
}


module.exports = delegadoCtrl;