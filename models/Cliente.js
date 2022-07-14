
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

       Clientes.hasMany(Pedidos,{ForeignKey:"Pedidos_id", as:"Pedidos"});
       Clientes.associate(Login);
       Clientes.hasMany(Servicos,{ForeignKey:"Servicos_id", as: "ServicosCliente"});
       Clientes.hasMany(Docao,{ForeignKey:"Doacao_iddocao", as: "DoacaoCliente"});
       Clientes.hasMany(FormasPagamento,{ForeignKey:"FormasPagamento_idFormasDePagamento", as: "FormaPagamentoCliente"})

      }

        return Clientes;
