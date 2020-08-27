/**Forma antes no novo ECMAScript 2015 */

function soma() {
    let soma = 0

    // O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma

}

console.log(soma()); //0
console.log(soma(1)); //1
console.log(soma(1.1, 2.2, 3.3)); //6.6
console.log(soma(1.1, 2.2, 'Texto')); // 3.3000000000000003Texto
console.log(soma('A', 'B', 'C')); //0ABC