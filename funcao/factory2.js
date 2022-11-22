function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('a', 1))
console.log(criarProduto('b', 2))