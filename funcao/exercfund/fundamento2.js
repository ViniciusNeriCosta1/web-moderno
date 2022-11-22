function classifica(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log('O triangulo é equilátero')
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log('O triangulo é isósceles')
    }else{
        console.log('O triangulo é escaleno')
    }
}

classifica(1,1,1)
classifica(1,1,2)
classifica(1,2,3)