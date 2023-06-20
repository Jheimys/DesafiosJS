

function fibonacci(n) {
   let a = 0
   let b = 1 
   let sequencia = []

 while(a <= n ) {            // suponha n = 10

    sequencia.push(a)       // [0, 1, 1, 2, 3, 5, 8]

    let variavel = a        // variavel = 0, 1, 1, 2, 3, 5, 8
    
    a = b                  // a = 1, 1, 2, 3, 5, 8, 13

    b = variavel + a       // b = (0 + 1), (1 + 1), (1 + 2), (2 + 3), (3 + 5), (5 + 8), (8 + 13)

 }

 return sequencia

}

console.log(fibonacci(10))
