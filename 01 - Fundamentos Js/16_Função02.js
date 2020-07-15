// Armazenar a  função em uma variável

const imprimirSoma = function(a, b) { // função anonima, ou seja sem nome 
    console.log(a + b) // imprimido o resultado 
}

imprimirSoma(2, 3) // chamando a função
    //5


// Outra função anonima
var Somando = function(A, B) {
    console.log(A + B)
}
Somando(2, 6)
    //8

// Armazenando a função Arrow em uma variável
// Forma reduzida de construir uma função 
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 2))

//Retorno implícito
const Subtraindo = (a, b) => a - b //faz desnecessário não usar as {}
console.log(Subtraindo(6, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
    //Legal !!!