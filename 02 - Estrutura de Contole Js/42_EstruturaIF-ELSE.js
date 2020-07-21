const imprimirResultado = function(nota) {
    if (nota >= 7) { //SE
        console.log('Aprovado com: ' + nota);

    } else { //Se NÃO
        console.log('Reprovado com: ' + nota);
    }

}

imprimirResultado(9) //Aprovado
imprimirResultado(6) // Reprovado
imprimirResultado(8.7) // Aprovado
imprimirResultado('Epa !') // Reprovado CUIDADO AQUI