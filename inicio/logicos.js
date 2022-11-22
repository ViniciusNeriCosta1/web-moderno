function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou
    const comprarTv50 = trabalho1 && trabalho2 //e
    const comprarTv32 = trabalho1 != trabalho2 //ou exlusivo
    const manterSaudavel = !comprarSorvete //negação
    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}//{}com isso se cria um objeto dentro do return, assim podendo ter o retorno de mais de uma variavel
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))