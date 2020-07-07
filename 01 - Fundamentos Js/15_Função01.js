//Função  sem retorno
function imprimirSoma(a, b) {

    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6) // 5 , e ignora o resto
imprimirSoma() // NaN

//Função com retorno
function soma(a, b = 1) {

    return a + b

}

console.log(soma(2 + 3)) //5
console.log(soma(2)) //3


// paratica rapido 
function nome(A, B) {

    console.log(A * B)
    console.log(A / B)
    console.log(A + B)
    console.log(A - B)

}

nome(8, 5) //40