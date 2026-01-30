const e = require("express")

const seq={
    _id:1,

    get id(){
        return this._id++
    }
}

let produtos={}

function salvar (produto){
    if(!produto.id){
        produto.id=seq.id
    }
    produtos[produto.id]=produto
    return produto
}



function getProdutos(){
    return Object.values(produtos)
}

function getProduto(id){
    return produtos[id] || 'Produto não cadastrado / 0000 '
}

function excluir(id){
    const produto=produtos[id]
    delete produtos[id]
    return produto
}

module.exports={
    salvar,getProduto,getProdutos,excluir
}
