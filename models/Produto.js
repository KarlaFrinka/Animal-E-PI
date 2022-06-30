module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define("Produtos", {
        tipo: DataTypes.STRING,
        peso: DataTypes.STRING,
        tamanho: DataTypes.STRING,
        cor: DataTypes.STRING,
        preco: DataTypes.INTEGER,
    }, {
        tablename: "Produtos",
        timestamps: false
    })

    Produtos.belongsTo(Pedidos);
    
    return Produtos;
}