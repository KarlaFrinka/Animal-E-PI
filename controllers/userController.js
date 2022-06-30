const db = require("../models");

const userController = {
    index: (req, res) => {
        db.Produtos.findAll().then((reposta) => {
            res.send(reposta)
        }).catch((err) => {
            res.send("Erro no resultado", err);
        });
    },

    register: (req, res) => {
        db.Clientes.create({
            nomeCompleto: req.body.nomeCompleto,
            email: req.body.email,
            senha: req.body.senha,
            senhaNovamente: req.body.senhaNovamente
        })
        .then(() => res.redirect('/home'))
        .catch((error) => console.log(error))

    },
};

module.exports = userController;