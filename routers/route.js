const express = require('express');
const controller = require('../controllers/controllerUsuario');
const controller = require('../controllers/controllerCreches');
const multer = require('multer');
const route = express.Router();

module.exports = route;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads/")
    },
    filename: (req, file, cb) => {
      req.imageName = req.body.nome+'.png'
      cb(null,  req.imageName)
    },
  })
const upload = multer({storage})

route.get("/home",function(req,res){
    res.render('home');
});
route.get("/logout", controllerUsuario.getLogout);

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);
//Usuario - CRUD
route.get("/usuarioCreateADM", controllerUsuario.getCreate);
route.post("/usuarioCreateADM", controllerUsuario.postCreate);
route.get("/usuarioCreateDiretor", controllerUsuario.getCreate);
route.post("/usuarioCreatDiretor", controllerUsuario.postCreate);
route.get("/usuarioCreatePais", controllerUsuario.getCreate);
route.post("/usuarioCreatePais", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);

//Controller Receita
//Receita-CRUD
route.get("/crecheCreate", controllerReceita.getCreate);
route.post("/crecheCreate",upload.single('imagem'),controllerReceita.postCreate);
route.get("/crecheList", controllerReceita.getList);
route.get("/crecheEdit/:id", controllerReceita.getEdit);
route.post("/crecheEdit",upload.single('imagem'),controllerReceita.postEdit);
route.get("/crecheDelete/:id", controllerReceita.getDelete);