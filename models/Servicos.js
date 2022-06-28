module.exports = (sequelize, DataTypes) => {
    const Animale = sequelize.define("Servicos", {
        banho_e_tosa: DataTypes.STRING,
        hotel: DataTypes.STRING,
        adestramento: DataTypes.STRING,
        pet_taxi: DataTypes.STRING,
       }, {
           tablename: "Servicos",
           timestamps: false
       });

        return Servicos;
}