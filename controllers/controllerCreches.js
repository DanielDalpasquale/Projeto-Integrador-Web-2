const Creche = require('../models/models_nosql/creches');

module.exports = {
    async getCreate(req, res) {
        res.render('/view/creche/crecheCreate.');
    },
    async postCreate(req, res) {
        const {nome, endereco, numero} = req.body;
        const imagem = req.imageName;
        console.log(imagem);
        const creche = new Creche({nome, endereco, numero, imagem});
        await creche.save();
        res.redirect('/home');
    },
    async getList(req, res) {
        Creche.find().then((creche) => {
            res.render('/view/crecheList', {creches: creches.map(creches => creches.toJSON())});
        });
    },
    async getEdit(req, res) {
        await Creche.findOne({ _id: req.params.id }).then((creches) => {
            res.render('/view/creche/crecheEdit', { creches: creches.toJSON() });
        });
    },
    async postEdit(req, res) {
        const {nome, endereco, numero} = req.body;
        const imagem = req.imageName;
        console.log(imagem);
        await Creche.findOneAndUpdate({_id:req.body.id}, {nome, endereco, numero,imagem});
        res.redirect('/view/crecheList');
    },
    async getDelete(req, res) {
        await Creche.findOneAndRemove({ _id: req.params.id });
        res.redirect('/view/crecheList');
    }
}