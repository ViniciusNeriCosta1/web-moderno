const saudacao = 'Opa'

function exec(){
    const saudacao = 'Fala'
    return saudacao
}

//Objeto são grupos aninhados de pares  nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua bla',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)