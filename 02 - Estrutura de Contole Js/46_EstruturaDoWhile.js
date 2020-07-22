// A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). 
// A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

//O do..While é pouca utilizada

function getNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numero = -1

//A ideia é que mesmo a operação ter executado -1 , ele irá continuar com a função pelo menos uma vez
do {
    numero = getNumeroAleatorioEntre(-1, 10)
    console.log(`O numero escolhido foi ${numero}.`);

} while (numero != -1)


console.log('Fim do DO...While')