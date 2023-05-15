
function calculoTarifa (idade) {
  let tarifa = 2.5

  if (idade <= 6) {

    return tarifa = 0

  }  else if (idade >= 60) {

    return 0.7*tarifa

  } else if (idade === 'estudante') {

    return 0.5*tarifa

  } else {
    return tarifa
  }
}

const valor = calculoTarifa(25)

console.log(valor)