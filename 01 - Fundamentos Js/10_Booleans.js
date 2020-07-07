let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//transformando valor 1 em verdadeiro, quando colocamos !! negação duas vezes estamos forçando 
//um valor ser verdadeiro 
isAtivo = 1
console.log(!!isAtivo)

console.log('\n') // só para pular linha

console.log('os verdadeiro..')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\n') // só para pular linha

console.log('Os Falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\n') // só para pular linha

console.log('Pelo menos um é verdadeiro...')
console.log(!!('' || null || 0 || " ")) // essa expressão é verdadeira pq pleo menos um é verdadeiro , que é o caso do " "


//Idetificando se há um nome na variavel nome
let nome = "Lucas"
console.log(nome || 'Desconhecido')