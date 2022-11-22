const produto = Object.preventExtensions({////não adiciona mas exclui e modifica elementos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)//não adiciona e excluir elementos mas consegue modificar
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = '29'
console.log(pessoa)

//Object.freeze = selado + valores constantes