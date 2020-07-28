/**
 * Funções são blocos de construção fundamentais em JavaScript. 
 * Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
 * Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la
 * 
 * Função em Js é First-Class Object (Citizens)
 * Higher-order Function / Função como dado
 */

//Possibilidades de uso com função

//Declarando função de forma literal
function func1() {

}

//Armazenando em uma variável 
const func2 = function() {

}

//Armazenar em uma Array
const array = [function(a, b) {
    return a + b
}, func1, func2]

console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {

}
obj.falar = function() { return 'Opa' }
console.log(obj.falar());

//Passar uma função como parâmetro para outra
function run(fun) {
    fun()
}

run(function() { console.log('Executando...'); })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(1, 2)(3) //6

const Result = soma(2, 3) //5
Result(4)