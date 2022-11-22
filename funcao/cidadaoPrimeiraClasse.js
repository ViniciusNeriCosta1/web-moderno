// criar uma funcao de forma literal
function fun1(){ }

// Armazenar uma funcao numa variavel
const fun2 = function() { }

// Armazenar uma funcao num array
const array = [function(a,b) {return a + b }, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}

// Armazenar função como param
function run(fun){fun()}

run(function(){console.log('executando...')})

// Uma função pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2, 3)(4)

const cincoMais = soma(2,3)
cincoMais(4)