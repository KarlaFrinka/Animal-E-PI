module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define("Produtos", {
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        peso: DataTypes.STRING,
        tamanho: DataTypes.STRING,
        cor: DataTypes.STRING,
        sabor: DataTypes.STRING,
        preco: DataTypes.INTEGER,
        idServico: DataTypes.BOOL
    }, {
        tablename: "Produtos",
        timestamps: false
    })

    Produtos.belongsTo(Pedidos);
    
    return Produtos;
}

module.exports = Produto;