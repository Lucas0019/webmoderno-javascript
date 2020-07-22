//A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. 
//A condição é avaliada antes da execução da rotina.

function getNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let numero = 0

//A ideia é que enquanto a operação verdadeira , irá executar o laço de repetição
while (numero != -1) {
    numero = getNumeroAleatorioEntre(-1, 10)
    console.log(`O numero  escolhida foi ${numero}.`);

}

console.log('Fim da Execução');