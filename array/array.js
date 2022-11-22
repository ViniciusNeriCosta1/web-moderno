console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new  Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3] = 'Paulo' //forma não convencional de adicionar valor ao indice do array
aprovados.push('Abia') //forma convencional de adicionar mais um valor ao ultimo indice
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()//altera o array organizando a ordem dos dados
console.log(aprovados)

delete aprovados[1]//altera para undefined o indice
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')//serve para remover adicionar e fazer os dois ao mesmo tempo, para excluir informar por qual indice começa e por qual indice finaliza, para adicionar apenas informar o valor
console.log(aprovados)