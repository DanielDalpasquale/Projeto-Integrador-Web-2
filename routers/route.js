const express = require('express');
const controller = require('../controllers/controller');
const route = express.Router();

module.exports = route;

//home
route.get("/home",controller.getHome);


//login e recuperação de senha
route.get("/",controller.getLogin);
route.post("/login",controller.postLogin);
route.get("/recuperarSenha:login",controller.getRecuperarSenha);

//crud Usuario
route.get("/usuarioCreateADM",controller.getUsuarioCreateADM);
route.post("/usuarioCreateADm",controller.postUsuarioCreateADM);
route.get("/usuarioList",controller.getListUsuario);