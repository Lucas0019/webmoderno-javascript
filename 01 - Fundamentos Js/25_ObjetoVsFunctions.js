//Relembrando o conteúdo

/**
 * Objeto:
 * 
 * Um objeto em JavaScript tem propriedades associadas a ele. 
 * Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. 
 * Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, 
 * exceto pelo fato de estarem ligadas a objetos. 
 */

var meuCarro = new Object();

meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

console.log(meuCarro)

//OU

var meuDesktop = {
    Marca: 'Positivo',
    SO: 'Umbutu 20.04 & Windows 10',
    Armazenamento: '700GB'
}

console.log(meuDesktop)


/**
 * 
 * Função
 * 
 * Funções são blocos de construção fundamentais em JavaScript. 
 * Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
 * Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
 * 
 */

function imprimirSoma(a, b) {

    console.log(a + b);

}

var mensagem = ('A soma é')
console.log(mensagem);


imprimirSoma(2, 3) // 5




// Aula 25 agora

console.log(typeof Object); //função
console.log(typeof new Object); // Objeto, instanciando um objeto

const Cliente = function() {}
console.log(typeof Cliente) //Função
console.log(typeof new Cliente) // Objeto

class Produto {} // ES 2015 {ES6}
console.log(typeof Produto); //Função
console.log(typeof new Produto); //Objeto