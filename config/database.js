const { Sequelize } = require('sequelize');
const config = require('./envs-config'); 


const sequelize = new Sequelize(
    config.database.name,         
    config.database.user,         
    config.database.password,    
    {
        host: config.database.host,
        port: config.database.port,
        dialect: 'postgres',     
        logging: false,         
    }
);

sequelize
    .authenticate()
    .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
    .catch((err) => console.error('Erro ao conectar ao banco:', err));

module.exports = sequelize;