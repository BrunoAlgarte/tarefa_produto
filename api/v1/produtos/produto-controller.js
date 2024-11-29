const produtoBusiness = require("./produto-business");

const getProdutos = async (request, h) => {
    const result = await produtoBusiness.list(request.query);
    return h.response(result).code(200);
};

const getProdutoPorId = async (request, h) => {
    const id = request.params.id;
    const produto = await produtoBusiness.findById(id);
    if (produto) {
        return h.response(produto).code(200);
    }
    return h.response({ error: "Produto não encontrado." }).code(404);
};

module.exports = {
    getProdutos,
    getProdutoPorId,
};