var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController');


router.get('/', servicosController.home);

router.get('/produtoInterno', servicosController.produtoInterno);

router.get('/produtos', servicosController.produtos(req, res)); 

router.get('/userCadastro', servicosController.userCadastro);


router.get('/userLogado', servicosController.userLogado);


router.get('/carrinho', servicosController.carrinho);

router.get('/')

module.exports = router;