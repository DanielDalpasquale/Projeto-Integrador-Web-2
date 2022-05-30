const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Creches = Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    numero: { type: Number, required: true },
    imagem: { type: String, required:false}
});

module.exports = mongoose.model("Creches", Creches)