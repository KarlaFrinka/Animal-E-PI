module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("Doacao", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cep: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        comlemento: DataTypes.STRING,
        contadoacao: DataTypes.INTEGER
       }, {
           tablename: "doacao",
           timestamps: false
       });

        return Doacao;
}