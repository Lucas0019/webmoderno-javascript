//Formas de declarar uma função


//Teste 
console.log(soma(1, 2)); //2
console.log(sub(2, 1)); // ERRO : Cannot access 'sub' before initialization 


//Function declaration - tradicional
function soma(x, y) {
    return x + y
}

//Function expression
//Declara uma função anonima e atribuir a uma variável/ constante
const sub = function(x, y) {
    return x - y
}

console.log(sub(2, 1));

//named function expression - Function declaration c/ expression
//pouca usada
const mult = function mult(x, y) {
    return x * y;
}