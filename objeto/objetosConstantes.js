// pessoa -> 123 =>{endereco de memoria}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 ->{endereco de memoria}
//pessoa = {nome: 'Ana'} o objeto pessoa no caso não pode ser alterado

Object.freeze (pessoa)
pessoa.nome = 'Maria'
//freeze mantem o valor daquele objeto
console.log(pessoa)
pessoa.end = 'Rua ABC'
console.log(pessoa.end)
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante.nome)
