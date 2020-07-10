console.log(1 / 2); /* imprime 0.5 */
console.log(1 / 2 == 1.0 / 2.0); /* isto também é verdadeiro */

const [a, b, c, d] = [3, 5, 1, 25]

const soma = a + b + c + d //34
const sub = d - b //20
const mult = a * b //8.33
const div = d / a //1 IMPAR
const rest = a % 2 // Muitas vezes utilizado para saber se o numero é PAR ou IMPAR , se o resto for 1 impar e 0 par

console.log(soma, sub, mult, div, rest)

console.log(soma);

/**
 * Nota de Aula
 * operador Postfix
 * a++
 * operador Prefix
 * ++a
 * operador infix
 * a + a
 */

//Operadores Aritméticos (Binários)