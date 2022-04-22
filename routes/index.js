var express = require('express');
var router = express.Router();

// const servicosController = require("../controllers/servicosController");
// const userCadLogController = require("../controllers/userCadLogController")

router.get('/', (req, res) => {
  res.render("home");
})

router.get('/produtoInterno', (req, res) => {
  res.render("produtoInterno")
});

router.get('/produto', (req, res) => {
  res.render("produto")
});

router.get('/servicos', (req, res) => {
  res.render("servicos")
});

router.get('/userCadLog', (req, res) => {
  res.render("userCadLog")
});


router.get('/userLogado', (req, res) => {
  res.render("userLogado")
});

module.exports = router;