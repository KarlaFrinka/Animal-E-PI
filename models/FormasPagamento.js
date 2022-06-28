module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("FormasPagamento", {
        numeroCartao: DataTypes.INTEGER,
        dataVencimento: DataTypes.INTEGER,
        cvv: DataTypes.INTEGER,
       }, {
           tablename: "FormasPagamento",
           timestamps: false
       });

        return FormasPagamento;
}