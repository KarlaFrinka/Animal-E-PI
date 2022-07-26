const db = require("../models");

const userController = {
    index: (req, res) => {
        db.Produtos.findAll().then((reposta) => {
            res.send(reposta)
        }).catch((err) => {
            res.send("Erro no resultado", err);
        });
    },

    create: function (req, res) {
        const {nomeCompleto, email, senha, senhaNovamente} = req.body
        db.Clientes.create({
            nomeCompleto,
            email,
            senha,
            senhaNovamente
        })
        .then(() => {
            res.redirect('/userLogado')
        })
        .catch(() => {
            res.redirect('/Home');
        })
    },

    edit: function (req, res) {
        const { idClientes } = req.params;
        const Clientes = await db.Clientes.findByPk(idClientes);
        res.render("loginEdicao", {
            
        })  
     }
};

module.exports = userController;