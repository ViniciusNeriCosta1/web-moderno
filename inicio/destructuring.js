const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua bla',
        numero:1
    }
}
console.log(pessoa)
const {nome, idade} = pessoa //tire da estrutura pessoa os dados nome e idade
console.log(nome, idade)
const {nome: n, idade: i} = pessoa
console.log(n, i)
const {sobrenome = true} = pessoa
console.log(sobrenome)
const {endereco:{logradouro}} = pessoa
console.log(logradouro)