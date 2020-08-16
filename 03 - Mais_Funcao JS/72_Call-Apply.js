//O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.

//O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4859,
    desc: 0.15,
    getPreco
}

//Contexto Global 
global.preco = 20
global.desc = 0.1
console.log(getPreco()); //R$ 18

//Chamando a partir de um objeto (Produto no caso)
console.log(produto.getPreco());

//Usando o Call e Apply
//A diferença está na passagem dos parâmetros
const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.Apply(carro, [0.17, '$']));

//Global
console.log(getPreco.Apply(global, [0.17, '$']));