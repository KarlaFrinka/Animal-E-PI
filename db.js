const Sequelize = require('sequelize');
const sequelize = new Sequelize('animale', 'root', 'Senha123', {dialect: 'mysql', hot: 'localhost'});


const conection = mysql.createConnection({
    host: "localhost",
    user: "animale",
    password: "Senha123"
});
 
conection.connect((error) => {
    if (error){
        throw error
    }else
    console.log("conectado")
});

module.exports = sequelize;