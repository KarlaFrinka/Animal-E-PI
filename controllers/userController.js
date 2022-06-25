const db = require("../models");

const userCadLogController = {
    index: (req, res) => {
        db.Clientes.findAll().then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send("Erro no resultado", err);
        });
    }
}