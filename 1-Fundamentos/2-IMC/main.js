const peso = 83
const altura = 1.78

function imc(peso, altura) {
  return (peso/(altura * altura)).toFixed(2)
}

console.log(imc(peso, altura))