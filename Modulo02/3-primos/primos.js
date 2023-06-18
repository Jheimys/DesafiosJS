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


//QUATIDADE DE NÚMEROS PRIMOS ATÉ N.

const N = 30                          //Número escolhido.

function ehPrimo(numero){             //A função ehPrimo recebe um número.
    if(numero <= 1) {                 //Se o número for menor ou igual a 1 entre no if.
        return false                  //se entrar no if será retornado falso.
    }

/*  
Se o número passou do if, entra no laço de repetição e será executada caso a condição
i * i <= numero for satisfeita, caso afirmativo será verificado o resto da divisão (numero % i)
se for zero retorna falso e se for diferente de zero sai do loop e retorna verdadeiro e o número
é primo.
*/
    for(let i = 2; i * i <= numero; i++) { 
        if(numero % i == 0){               
            return false                   
        }                                  
    }                                                          

    return true
}

for(let numero = 2; numero <= N; numero++){   //Se  numero <= N entra no loop
    if(ehPrimo(numero)){                      //Se ehPrimo(numero) for true entra no if
        console.log(numero)                   // Imprime o múmero.
    }
}


