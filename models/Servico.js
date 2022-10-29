module.exports = (sequelize, DataTypes) => {
    const Servicos = sequelize.define("Servicos", {
        banho_e_tosa: DataTypes.STRING,
        hotel: DataTypes.STRING,
        adestramento: DataTypes.STRING,
        pet_taxi: DataTypes.STRING,
       }, {
           tablename: "Servicos",
           timestamps: false
       }); 

       Servicos.hasMany(Clientes,{ForeignKey:"Pedidos_id", as: "ServicosProdutos"});
       

        return Servicos;
}