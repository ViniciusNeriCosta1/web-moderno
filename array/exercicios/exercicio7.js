function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) console.log(numero >= minimo && numero <= maximo)
    console.log(numero > minimo && numero < maximo)
}
    
estaEntre(10, 100, 50) // retornarĂ¡ true
estaEntre(16, 100, 160) // retornarĂ¡ false
estaEntre(3, 150, 3) // retornarĂ¡ false
estaEntre(3, 150, 3, true) // retornarĂ¡ true