//Função de comparação entre duas notas com possíveis retornos

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this >= fim //O this usado para acessar o Number
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honrá');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');

    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');

    } else if (nota.entre(0, 3.99)) {
        console.log('Recuperação');

    } else { //Quando a nota é invalida
        console.log('Nota Invalida');
    }
    //console.log('Fim');

}

//Aplicando os testes
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)