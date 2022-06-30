const navegacaoController = {
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
        res.render("userCadastro")
    },
    userLogado: (req, res) => {
        res.render("userLogado")
    },
    carrinho: (req, res) => {
        res.render("carrinho")
    },
    servicos: (req, res) => {
        res.render("servicos")
    },
    doe: (req,res) => {
        res.render("doe")
    },
    register: (req, res) => {
        res.render("cadastro")
    }
}

module.exports = navegacaoController;