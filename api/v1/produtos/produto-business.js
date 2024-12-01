const Produto = require('./produto-model');


const save = async (produto) => {
    try {
        const novoProduto = await Produto.create(produto); 
        return novoProduto;
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
        throw error;
    }
};


const update = async (id, novoProduto) => {
    try {
        const produto = await Produto.findByPk(id); 
        if (!produto) return null;

        await produto.update(novoProduto); 
        return produto;
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
    }
};


const remove = async (id) => {
    try {
        const produto = await Produto.findByPk(id); 
        if (!produto) return false;

        await produto.destroy();
        return true;
    } catch (error) {
        console.error('Erro ao remover produto:', error);
        throw error;
    }
};


const list = async (filters) => {
    try {
        const where = {}; 
        if (filters.nome) {
            where.nome = {
                [require('sequelize').Op.iLike]: `%${filters.nome}%` 
            };
        }

        if (filters.categoria) {
            where.categoria = filters.categoria; 
        }

        const produtos = await Produto.findAll({ where }); 
        return produtos;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        throw error;
    }
};


const findById = async (id) => {
    try {
        const produto = await Produto.findByPk(id); 
        return produto;
    } catch (error) {
        console.error('Erro ao buscar produto por ID:', error);
        throw error;
    }
};

module.exports = { list, findById, save, update, remove };
