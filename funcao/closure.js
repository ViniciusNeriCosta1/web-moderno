//Closure é o escopo criado quando uma funcao é declarada
//eEsse escopo permite a fun~ção acessar e manipular variaveis externas á função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())