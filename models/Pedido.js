module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define("Pedidos", {
        quantidade: DataTypes.STRING,
        taxa_entrega: DataTypes.STRING,
        total: DataTypes.STRING,
        data_compra: DataTypes.STRING,
       }, {
           tablename: "Pedidos",
           timestamps: false
       });

       Pedidos.hasMany(Produtos,{ForeignKey:"FormasPagamento", as:"PagamentoPedido"})

        return Pedidos;
}