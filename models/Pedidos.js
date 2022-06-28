module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("Pedidos", {
        quantidade: DataTypes.STRING,
        taxa_entrega: DataTypes.STRING,
        total: DataTypes.STRING,
        data_compra: DataTypes.STRING,
       }, {
           tablename: "Pedidos",
           timestamps: false
       });

        return Pedidos;
}