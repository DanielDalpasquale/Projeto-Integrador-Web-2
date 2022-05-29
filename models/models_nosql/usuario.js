const mongoose = require ('mongoose');

const usuario = mongoose.Schema({
    cpf: {type:Number , require:true},
    nome: {type:String , require:true},
    tipo: {type:String , require:true}
})

module.exports = mongoose.model("Usuario" , usuario);