const servicosController = {
    home: (req, res) => {
        res.render("home");
    },
    produtoInterno: (req, res) => {
        res.render("produtoInterno")
    },
    produtos: (req, res) => {
        res.render("produtos")
    },
    userCadastro: (req, res) => {
        res.render("userCadLog")
    },
    userLogado: (req, res) => {
        res.render("userLogado")
    },
    carrinho: (req, res) => {
        res.render("carrinho")
    },
    servicos: (req, res) => {
        res.render("servicos")
    }
}

module.exports = servicosController;