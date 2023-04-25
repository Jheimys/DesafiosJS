const prompt = require('prompt-sync')()
const operacao = prompt('Escolha, soma, subtracao, multiplicacao ou divisao:')
const numero1 = 10
const numero2 = 20
let operacaoEscolhida

switch (operacao) {
    case "soma":
        operacaoEscolhida = numero1 + numero2
        break;

    case "subtracao":
        operacaoEscolhida = numero1 - numero2
        break

    case "multiplicacao":
        operacaoEscolhida = numero1 * numero2
        break

    case "divisao":
        operacaoEscolhida = numero1 / numero2
        break

    default:
        break;
}

console.log(`O resultado é : ${operacaoEscolhida}`)

    