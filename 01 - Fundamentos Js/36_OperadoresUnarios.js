//Um operador unário é uma operação com apenas um operando.

/**Veremos agora o Incremento e o Decremento  */
let num1 = 1
let num2 = 2

//Nota de Aula : Atentar-se a precedência dos sinais 
// Forma pos fixada, esse operando acrescenta um valor a unidade
num1++
console.log(num1); //2

//Forma prefixada, esse operando decrementa o valor da unidade
--num1
console.log(num1); //1

//Desafio, escreva códigos SIMPLES
console.log(++num1 === num2--); // True
console.log(num1 === num2); // False