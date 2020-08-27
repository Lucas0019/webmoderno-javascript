/**
 * Analisando o contexto de Execução
 *
 *Front End : o javaScript é executado no browser
 * Back End: Que é quando está executando fora do navegador, utiliza-se um runtime ''Node.js 
 */

let a = 3

global.b = 3
this.c = 58
this.d = false
this.e = 'Texto'

console.log(this.a); // undefined
console.log(global.a); // undefined, no node o global equivale ao window
console.log(global.b); // retornar o valor (3), porque foi declarado
console.log(this.b); // retornar o valor (58), porque foi declarado

//NOTA: Em node cada arquivo é um modulo , que é diferente quando executamos no browser onde tudo é um arquivo só.
console.log(module.exports.c); // 58
console.log(module.exports === this); // true
console.log(module.exports); // { c: 58, d: false, e: 'Texto' } Aqui ele exportou o objeto para fora 

//Que é equivalente a :
//module.exports = { c: 58, d: false, e: 'Texto' }

//Criando uma variável sem VAr ou LET
abc = 5 // NÃO FAÇA ISSO EM CASA !@
console.log(global.abc); //5