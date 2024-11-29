const Produto = require('./produto-model');
const listaProdutos = [];

const list = async (filters) => {
    let resultado = listaProdutos;

    if (filters.nome) {
        resultado = resultado.filter((produto) =>
            produto.nome.toLowerCase().includes(filters.nome.toLowerCase())
        );
    }

    if (filters.categoria) {
        resultado = resultado.filter(
            (produto) => produto.categoria === filters.categoria
        );
    }

    return resultado;
};

const findById = async (id) => {
    return listaProdutos.find((produto) => produto.id == id);
};

module.exports = { list, findById };
