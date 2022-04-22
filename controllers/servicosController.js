const servicosController = {
    index: function(req, res){
        res.send(servicos);
    }
}

module.exports = servicosController;