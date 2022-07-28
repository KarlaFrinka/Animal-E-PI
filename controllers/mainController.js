const db = require("../models");
const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require ('path');

const produtosFilePatch = path.join(__dirname, '');
const produtos = JSON.parse(fs.readFileSync(produtosFilePatch, 'utf-8'));



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visitado = produtos.filter(function(produto){
    return produto.category == 'visitado'
})
const oferta = produtos.filter(function(produto){
    return produto.category == 'oferta'
})
const controller = {
    index: (req, res) => {
        res,render('index', {
            visitado,
            oferta,
            toThousand
        });
    },
};

module.exports = {
    viwCadastro: (req, res) => {
        return res.render("index");
    },
    salvarCadastro: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped());
            return res.render("index", { errors: errors.mapped() });
        }
        if (!req.file){
            return res.send("você deve enviar um arquivo.");
        }
        return res.send("deu certo");
        }
}



module.exports = mainController;