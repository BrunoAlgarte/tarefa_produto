const Joi = require("joi");

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

module.exports = { consultaPorId, consultarProdutos };
