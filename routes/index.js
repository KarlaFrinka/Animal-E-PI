const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController');


router.get('/home', servicosController.home);

router.get('/produtoInterno', servicosController.produtoInterno);

router.get('/produtos', servicosController.produtos); 

router.get('/userCadastro', servicosController.userCadastro);

router.get('/userLogado', servicosController.userLogado);

router.get('/carrinho', servicosController.carrinho);

router.get('/servicos', servicosController.servicos);

router.get('/doe', servicosController.doe);


module.exports = router;