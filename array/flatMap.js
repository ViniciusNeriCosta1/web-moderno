const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustado',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }
]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }
]
}]

const getNotadoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotadoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)

console.log(notas2)