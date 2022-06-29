module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define("Login", {
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
       }, {
           tablename: "Login",
           timestamps: false
       });

        return Login;
}