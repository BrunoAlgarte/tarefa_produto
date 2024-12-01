const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codigoBarras: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    dimensoes: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    peso: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ativo',
    },
    dataCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'produtos',
    timestamps: false,
});

module.exports = Produto;

