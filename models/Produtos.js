module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Produtos", {
        tipo: DataTypes.STRING,
        peso: DataTypes.STRING,
        tamanho: DataTypes.STRING,
        cor: DataTypes.STRING,
        preco: DataTypes.INTEGER,
    }, {
        tablename: "Produtos",
        timestamps: false
    })
    
    return Produtos;
}