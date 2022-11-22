class Lancamento {
    constructor(nome = 'Generico', valor = 0){ //criando um construtor com os atributos
        this.nome = nome //adicionando ao objeto que está sendo criado
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l)) //
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => { // para cada valor consolidado é adicionado o numero de lancamentos
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento ('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())