let dobro = function (a) {
    return 2* a
}

dobro = (a) =>{
    return 2*a
}

dobro = a => 2*a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola'//

ola = _ => 'Ola' //possui um param mas é possível ignorar
console.log(ola())