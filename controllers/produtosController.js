const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

(async () => {
    const database = require('./db');
    const Produto = require('../models/Produto');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

const resultadoCreate = await produtos.create({
    nome: 'ração',
    tipo:'comida',
    peso: '10kl',
    tamanho: '10x10cm',
    cor: 'verde',
    sabor: 'vegetais',
    preco: 10,
    idServico: 1
})
console.log(resultadoCreate);












const produtosFilePatch = patch.join(__dirname, '');
const produtos = JSON.parse(fs.readFileSync(produtosFilePatch, 'utf-8'));





const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        res.render('produtos', {
            produtos, 
            toThousand
        })
    },

    detalhe: (req, res) => {
        let id = req.params.id
        let produto = produtos.find(produto => produto.id == id)
        res.rend('detail', {
            produto,
            toThousand
        })
    },
    create: (req, res) => {
		res.render('product-create-form')
	},
	
	store: (req, res) => {
		let newProduto = {
			id: produtos[produtos.length - 1].id + 1,
			...req.body,
			image: 'default-image.png'
		};
		produtos.push(newProduto)
		fs.writeFileSync(produtosFilePatch, JSON.stringify(produtos, null, ' '));
		res.redirect('/');
	},

	
	edit: (req, res) => {
		let id = req.params.id
		let produtoToEdit = produtos.find(produto => produto.id == id)
		res.render('product-edit-form', {produtoToEdit})
	},
	
	update: (req, res) => {
		let id = req.params.id;
		let produtoToEdit = produtos.find(produto => produto.id == id)

		produtoToEdit = {
			id: produtoToEdit.id,
			...req.body,
			image: produtoToEdit.image,
		};
		
		let newProdutos = produtos.map(produto => {
			if (produto.id == produtoToEdit.id) {
				return produto = {...produtoToEdit};
			}
			return produto;
		})

		fs.writeFileSync(produtosFilePatch, JSON.stringify(newProdutos, null, ' '));
		res.redirect('/');
	},

	
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProdutos = produtos.filter(produto => produto.id != id);
		fs.writeFileSync(produtosFilePatch, JSON.stringify(finalProdutos, null, ' '));
		res.redirect('/');
	}
};


module.exports = controller;

