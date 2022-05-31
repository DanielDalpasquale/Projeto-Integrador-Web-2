const db_mongoose = require('./config/db_mongoose');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Usuario = require('./models/models_nosql/usuario');
const usuario = require('./models/models_nosql/usuario');
app.use(
    express.urlencoded({extended:true})
)

mongoose.connect(db_mongoose.connection,{useUnifiedTopology:true,useNewUrlParse:true}).then(()=>{
    console.log('conectado');
    }).catch(()=>{
        console.log('erro');
});


app.listen(8081,function(){
    console.log("Servidor em http://localhost:8081");
});


// CRUD New Usuario

new Usuario({
    cpf:12345678970,
    nome:'Daniel',
    tipo:'ADM'
});

// Consulta
const query = Usuario.find({Daniel},function(err,docs){
    if (err){
        console.log(err)
    }else{
        console.log(docs)
    }
});

//Atualizar dados
    Usuario.findOneAndUpdate({nome:'Daniel'},{nome:'Daniel Dalpasquale'}, function(err,docs){
        if (err){
            console.log(err)
        }else{
            console.log(docs)
        }
    });

// deletar
    Usuario.findOneAndDelete({nome:'Daniel Dalpasquale'},function(err,docs){
        if(err){
            console.log(err)
        }else{
            console.log(docs)
        }
    });