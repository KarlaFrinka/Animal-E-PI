const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController');
const multer = require('multer');


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

router.post('/userCadastro', updloadFile.single('avatar'), servicosController.register);



const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/avatars');    
    },
    filename: function (req, file, cb) {
        cb(null,
            `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const updloadFile = multer ({ storage});


module.exports = router;