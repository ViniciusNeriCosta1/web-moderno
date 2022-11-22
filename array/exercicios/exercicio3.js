function calcularSalario(hrTrabalhada, valorhrTrabalhada){
    resultado = valorhrTrabalhada * hrTrabalhada
    console.log(`Salário igual a R$ ${resultado} !`)
}

calcularSalario(150, 40.5)

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
}

calcularSalario(50, 40)