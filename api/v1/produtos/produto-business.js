const Produto = require('./produto-model');
const listaProdutos = [];

const save = async (produto) => {
    produto.id = Math.floor((Math.random() * 1000)); 
    listaProdutos.push(produto);
    return produto;
};

const update = async (id, novoProduto) => {
    const index = listaProdutos.findIndex((produto) => produto.id == id);
    if (index !== -1) {
        listaProdutos[index] = { ...listaProdutos[index], ...novoProduto };
        return listaProdutos[index];
    }
    return null;
};

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

module.exports = { list, findById, save, update, };
