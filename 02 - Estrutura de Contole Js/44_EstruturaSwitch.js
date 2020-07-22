/**
 * A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, 
 * e executa as instruções  associadas ao case.
 */

const imprimirResultado = function(nota) {
    //Observação: A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    switch (Math.floor(nota)) { //O floor arredonda qualquer numero para baixo
        case 10:
        case 9:
            console.log('Quadro de Honrá');
            break //Ele para a operação caso a mesa seja executada 
        case 8:
        case 7:
            console.log('Aprovado');
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação');
            break
        case 3:
        case 2:
        case 1:
            console.log('Reprovado');
            break

            //Caso padrão da nota não ser valida 
        default:
            console.log('Nota Invalida');

    }
}

//Aplicando os teste
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)

//Analisando o Floor
//Observação: A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
imprimirResultado(6.7) //Recuperação
imprimirResultado(8.9) //Aprovado