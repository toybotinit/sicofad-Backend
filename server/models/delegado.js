const mongoose = require('mongoose');
const { Schema } = mongoose;

const DelegadoSchema = new Schema({
    nombre: { type: String, required: true },
    codigo: { type: Number, required: true },
    email: { type: String, required: true },
    telefono: { type: Number },
    celular: { type: Number, required: true },
    direccion: { type: String },
});

module.exports = mongoose.model('delegado', DelegadoSchema);