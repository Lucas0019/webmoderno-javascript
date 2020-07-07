const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

//Teste para saber se é um numero inteiro 
console.log(Number.isInteger(peso1))


//Calculo da media da nota

const AV1 = 8.789
const AV2 = 9.789

const total = AV1 * peso1 + AV2 * peso2
const Media = total / (peso1 + peso2)

console.log(Media.toFixed(2)) // O toFixed , ele controla quantas casas decimais voce deseja no valor final
console.log(Media.toString(2)) // Transforma em numero binário 
console.log(typeof Media) // identifica o tipo da variavel
console.log(typeof Number)