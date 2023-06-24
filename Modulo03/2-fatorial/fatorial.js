

function fatorial(n) {
    let resuldado = 1

    for(let i = 1; i<= n; i++){
        resuldado *= i
    }

    return console.log(`${n}! = ${resuldado}`)
}

fatorial(7)

