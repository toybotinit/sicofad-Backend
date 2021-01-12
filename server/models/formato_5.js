const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoSchema = new Schema({
    teoria: { type: Boolean },
    practica: { type: Boolean },
    laboratorio: { type: Boolean }
}, { _id : false });

const DelCursoSchema = new Schema({
    porcentaje_silabo: { type: Number, required: true },
    practicas: { type: Number, required: true },
    experiencias_laboratorio: { type: Number, required: true },
    proyectos_investigacion: { type: Number, required: true },
    matriculados: { type: Number, required: true },
    aprobados: { type: Number, required: true },
    desaprobados: { type: Number, required: true },
    ausentes: { type: Number, required: true },
    nota_alta: { type: Number, required: true },
    nota_baja: { type: Number, required: true },
    nota_promedio: { type: Number, required: true }
}, { _id : false });

const ObsSchema = new Schema({
    nivel: { type: String, required: true },
    asistencia: { type: String, required: true },
    silabo: { type: String, required: true },
    aula_virtual: { type: String, required: true },
    administrativas: { type: String, required: true },
    silabo_competencias: { type: String, required: true },
    mejora_continua: { type: String, required: true },
    investigacion_formativa: { type: String, required: true },
    actualizacion_docente: { type: String, required: true },
    comentarios_recomendaciones: { type: String, required: true }
}, { _id : false });

const Form5Schema = new Schema({
    cod_curso: { type: Number, required: true },
    nom_curso: { type: String, required: true },
    num_grupo: { type: Number, required: true },
    tipo: { type: TipoSchema },
    nom_docente: { type: String, required: true },
    email_docente: { type: String, required: true },
    num_docente: { type: Number },
    del_curso: { type: DelCursoSchema },
    observaciones: { type: ObsSchema },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Form5', Form5Schema);