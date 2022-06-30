module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define("Login", {
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
       }, {
           tablename: "Login",
           timestamps: false
       });

       Login.associate(Cliente,{ForeignKey:"Clients_id", as: "ClientesLogin"});

        return Login;
}