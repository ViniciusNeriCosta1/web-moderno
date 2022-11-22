const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona ao ultimo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona ao primeiro elemento
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')//utilizando o splice dessa maneira irá adicionar ao indice 2 e não removendo itens os seguintes valores ao array
console.log(pilotos)

pilotos.splice(3, 1)//utilizando o splice dessa maneira irá remover ao indice 3 e um elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a partir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1 ,4) //cria um novo array a partir do indice até tal indice mas o segundo parametro não entra no array
console.log(algunsPilotos2)