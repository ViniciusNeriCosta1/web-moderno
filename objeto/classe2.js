class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome //adicionando ao objeto que está sendo criado
    }
}

class Pai extends Avo{ // com extends é definido que class pai é ou prototipo de avo ou seja, consegue utilizar objs da classe Avo
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)//pra poder utilizar o construtor da classe extendida
        this.profissao = profissao 
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho //instanciando a classe filho 
console.log(filho)