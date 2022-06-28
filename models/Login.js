module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("Login", {
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
       }, {
           tablename: "Login",
           timestamps: false
       });

        return Login;
}