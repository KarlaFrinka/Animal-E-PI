const db = require("../models");

const userController = {
    index: (req, res) => {
        db.Produtos.findAll().then((reposta) => {
            res.send(reposta)
        }).catch((err) => {
            res.send("Erro no resultado", err);
        });
    }
}

module.exports = userController;