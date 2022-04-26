var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController');

// const userCadLogController = require("../controllers/userCadLogController")

router.get('/', servicosController.home);

router.get('/produtoInterno', servicosController.produtoInterno);

router.get('/produtos', servicosController.produtos); 

router.get('/servicos', servicosController.servicos);

router.get('/userCadLog', servicosController.userCadLog);


router.get('/userLogado', servicosController.userLogado);

module.exports = router;