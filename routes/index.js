const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController');


router.get('/home', servicosController.home);

router.get('/produtoInterno', servicosController.produtoInterno);

router.get('/produtos', servicosController.produtos); 

// CRUD BÁSICO
router.get('/userCadastro', servicosController.userCadastro);

router.post('/userCadastro', servicosController.register);

router.get('/userLogado', servicosController.edit);

router.post('/userLogado', servicosController.update);

router.get('/userLogado', servicosController.userLogado);
//FIM CRUD

router.get('/carrinho', servicosController.carrinho);

router.get('/servicos', servicosController.servicos);

router.get('/contatos', servicosController.contatos);

router.get('/doe', servicosController.doe);


module.exports = router;