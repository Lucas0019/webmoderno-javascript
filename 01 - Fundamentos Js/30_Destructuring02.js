// Desestruturando um array
// Extrair um array de uma posição, ou seja tirar esse valor

const [a] = [10]
console.log(a);

//aqui temos uma forma de desestruturar o array e atribuindo valor aos mesmos
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

//desestruturação aninhada
//Array de Array
const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
]
console.log(nota);
//6