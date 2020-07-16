/**
 * É o único operador JavaScript que utiliza três operandos. O operador pode ter um de dois valores baseados em uma condição.
 * SINTAXE: condição ? valor1 : valor2
 */

//Exemplo
let idade = 20 // Adulto
let status = (idade >= 18) ? "adulto" : "menor de idade";
console.log(status);

/**
 * Esta declaração atribui o valor "adulto" à variável status caso idade seja dezoito ou mais. 
 * Caso contrário, atribui o valor "menor de idade".
 */

//Aula 37

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
    //const nota = 8
console.log(resultado(7.1)); //Aprovado
console.log(resultado(5.1)); //Reprovado