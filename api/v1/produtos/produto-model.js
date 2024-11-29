const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database");

const Produto = sequelize.define(
  "Produto",
  {
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
      type: DataTypes.STRING,
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
      validate: {
        min: 0,
      },
    },
    quantidadeEstoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    codigoBarras: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [13, 13],
      },
    },
    dimensoes: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isValidDimensoes(value) {
          if (
            !value.altura ||
            !value.largura ||
            !value.profundidade ||
            !value.unidadeMedida
          ) {
            throw new Error("Dimensões inválidas!");
          }
        },
      },
    },
    peso: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isValidPeso(value) {
          if (!value.valor || !value.unidadeMedida) {
            throw new Error("Peso inválido!");
          }
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ativo",
      validate: {
        isIn: [["ativo", "inativo"]],
      },
    },
    dataCadastro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

module.exports = Produto;
