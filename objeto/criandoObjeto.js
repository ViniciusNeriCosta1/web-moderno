//notacao literal de um objeto
const obj1 = {}
console.log(obj1)

// onjeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcao construtoras
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) 
//se tentar mostrar a var preco e desc não tera retorno pq não são publicas pois não tem o this

//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return( salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7900, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//Objeto.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse ('{"info": "Sou um JSON"}')
console.log(fromJSON.info)