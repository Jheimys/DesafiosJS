//Programa para saber se o número é primo
let numero = 13
let raizQuadara = parseInt(Math.sqrt(numero))
let quantidadeDeDivisores = []

for(let i = 1; i <= raizQuadara; i++){
    let restoDivisao = numero % i

    if(restoDivisao === 0) {
        quantidadeDeDivisores.push(restoDivisao)
    }

}

if(quantidadeDeDivisores.length === 1) {

    console.log(`O número ${numero} é primo`)

} else {

    console.log(`O número ${numero} não é primo`)
}





