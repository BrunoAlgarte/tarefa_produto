const Joi = require("joi");

const createProduto = {
    payload: Joi.object({
        nome: Joi.string().min(3).required(),
        descricao: Joi.string().min(10).required(),
        categoria: Joi.string().required(),
        marca: Joi.string().required(),
        preco: Joi.number().positive().required(),
        quantidadeEstoque: Joi.number().integer().positive().required(),
        codigoBarras: Joi.string().length(13).required(),
        dimensoes: Joi.object({
            altura: Joi.number().positive().required(),
            largura: Joi.number().positive().required(),
            profundidade: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid("cm").required(),
        }).required(),
        peso: Joi.object({
            valor: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid("kg").required(),
        }).required(),
        status: Joi.string().valid("ativo", "inativo").default("ativo"),
        dataCadastro: Joi.date().required(),
    }),
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi.string().min(3),
        descricao: Joi.string().min(10),
        categoria: Joi.string(),
        marca: Joi.string(),
        preco: Joi.number().positive(),
        quantidadeEstoque: Joi.number().integer().positive(),
        codigoBarras: Joi.string().length(13),
        dimensoes: Joi.object({
            altura: Joi.number().positive(),
            largura: Joi.number().positive(),
            profundidade: Joi.number().positive(),
            unidadeMedida: Joi.string().valid("cm"),
        }),
        peso: Joi.object({
            valor: Joi.number().positive(),
            unidadeMedida: Joi.string().valid("kg"),
        }),
        status: Joi.string().valid("ativo", "inativo"),
    }),
};
const consultaPorId = {
    params: Joi.object({
        id: Joi.number().integer().positive().required(),
    }),
};

const consultarProdutos = {
    query: Joi.object({
        nome: Joi.string().min(3),
        categoria: Joi.string(),
    }),
};

module.exports = { consultaPorId, consultarProdutos, createProduto, updateProduto };
