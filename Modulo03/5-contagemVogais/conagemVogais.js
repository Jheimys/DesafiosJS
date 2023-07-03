
//Solução 1

function contarVogais(str){
    let texto = str.toLowerCase().split('')
    let vogal = []

    texto.map(item =>  {
       switch(item){
        case 'a':
            vogal.push('a')
            break

        case 'e':
            vogal.push('e')
            break
        case 'i':
            vogal.push('i')
            break
        
        case 'o':
            vogal.push('o')
            break 
        case 'u':
            vogal.push('u')
            break
       }

    })
    
    return console.log(`A palavra ${str} possui ${vogal.length} vogais`)
}

contarVogais('JavaScript')

//Solução 2

function contarVogal(str){
    const vogais = "aeiouAEIOU"
    
    let count = 0

    for(let i = 0; i < str.length; i++){

        if(vogais.includes(str[i])){
            count++
        }
    }

    return count
} 

const texto = "Testando"

const contagemDeVogais = contarVogal(texto)

console.log(contagemDeVogais)