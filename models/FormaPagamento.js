module.exports = (sequelize, DataTypes) => {
    const FormasPagamento = sequelize.define("FormasPagamento", {
        numeroCartao: DataTypes.INTEGER,
        dataVencimento: DataTypes.INTEGER,
        cvv: DataTypes.INTEGER,
       }, {
           tablename: "FormasPagamento",
           timestamps: false
       });

       FormasPagamento.hasMany(Pedidos);

        return FormasPagamento;
}