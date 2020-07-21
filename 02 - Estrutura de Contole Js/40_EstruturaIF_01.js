//Estrutura IF

/**
 * A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco,
 *  se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
 */


//Função simples que só retorna se o aluno foi aprovado
function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com: ' + nota);

    }
}

soBoaNoticia(9.2)
soBoaNoticia(6.7)

//Função que retorna uma verdade
function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor);

    }

}

seForVerdadeEuFalo() //undefined que é falso
seForVerdadeEuFalo(null) //False
seForVerdadeEuFalo(undefined) //False
seForVerdadeEuFalo(NaN) //False
seForVerdadeEuFalo('') //False
seForVerdadeEuFalo(0) //False
seForVerdadeEuFalo(-1) //True
seForVerdadeEuFalo('') //True
seForVerdadeEuFalo('?') //True
seForVerdadeEuFalo([]) //True
seForVerdadeEuFalo([1, 2]) //True
seForVerdadeEuFalo({}) //True