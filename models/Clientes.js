
module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("Clientes", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cep: DataTypes.STRING,
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