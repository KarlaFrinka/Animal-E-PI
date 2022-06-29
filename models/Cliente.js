
module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define("Clientes", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        cep: DataTypes.INTEGER,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        comlemento: DataTypes.STRING,
       }, {
           tablename: "clientes",
           timestamps: false
       });

        return Clientes;
}