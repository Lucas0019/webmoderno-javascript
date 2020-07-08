// Em JavaScript, uma variável pode ser declarada após ter sido usada.
//Em outras palavras; uma variável pode ser usada antes de ser declarada.

//NOTA: Não faz-se necessario o uso desse efeito em problemas, dificilmente irá agrgar valor (importancia)

//USANDO O VAR 

console.log("a = ", a);
var a = 2000
console.log("a = ", a);
//a =  undefined
//a =  2000

//Mesmo efeito dentro de uma função
function Host() {

    console.log("b = ", b);
    var b = 2000
    console.log("b = ", b);

}

Host()


//USANDO O LET o EFEITO HOISTING não ocorre
console.log("c = ", c);
let c = 2000
console.log("c = ", c);
//c is not defined