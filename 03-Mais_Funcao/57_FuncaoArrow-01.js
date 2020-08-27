/*Arrow Function
 * 
 * A principal diferença é o contexto do this. A arrow function não cria o próprio this
 * Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) 
 * e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos,
 *  e elas não podem ser usadas como construtoras (constructors).
 *Introduzida no ES6 2015
 */

//Função Normal 
let dobro = function(a) {
    return a * 2
}

//Arrow Function
dobro = (a) => {
    return a * 2
}

//Arrow Function mais reduzida - único parâmetro
dobro = a => 2 * a //return implícita
console.log(dobro(6));

//Outro exemplo
let ola = function() {
    return 'Olá Mundo'
}

//Arrow function
ola = () => 'Ola'
ola = _ => 'Ola' // Possui um parâmetro
console.log(ola());