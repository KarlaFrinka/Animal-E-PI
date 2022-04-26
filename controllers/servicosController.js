const servicosController = {
    servicos: (req, res) => {
        res.send(servicos);
    },
    home: (req, res) => {
        res.render("home");
    },
    produtoInterno: (req, res) => {
        res.render("produtoInterno")
    },
    produtos: (req, res) => {
        res.render("produtos")
    },
    servicos: (req, res) => {
        res.render("servicos")
    },
    userCadLog: (req, res) => {
        res.render("userCadLog")
    },
    userLogado: (req, res) => {
        res.render("userLogado")
    },
    carrinho: (req, res) => {
        res.render("carrinho")
    }
}

module.exports = servicosController;