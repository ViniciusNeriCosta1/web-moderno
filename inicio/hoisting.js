//var a, esse seria o exemplo do içamento, a variavel sobe mas a atribuição não
console.log('a= ', a)//pelo içamento, o log consegue enxerga a variavel mas não a atribuição
var a = 2
console.log('a= ', a)

function teste(){
    console.log('a= ', a)
    var a = 2
    console.log('a= ', a)
}

teste()

console.log('b= ', b)//quando a variavel é um let não ocorre o içamento
let b = 1
console.log('b= ', b)