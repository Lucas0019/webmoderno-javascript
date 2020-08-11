//Função Anonima ? É uma função sem nome 

const soma = function(x, y) {
    return x + y
}

const imprimirResult = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResult(3, 4) //7
imprimirResult(3, 4, soma) //7
imprimirResult(3, 4, function(x, y) {
    return x - y //-1
})

imprimirResult(3, 4, (x, y) => x * y) //12


//Exemplo de outra função anonima
const pessoa = {
    falar: function() {
        console.log("Opa Dev")
    }

}

//chamando a funcao pessoa
pessoa.falar()