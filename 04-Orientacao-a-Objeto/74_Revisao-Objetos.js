//Coleção dinâmica de pares chave valor

//Definição mdn:
// Um objeto é uma coleção de dados e/ou funcionalidades relacionadas
// (que geralmente consistem em diversas variáveis
// e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

//Sintaxe: var pessoa = {};


//instancia o novo objeto 
const produto = new Object;

//Adicionando propriedades
produto.nome = 'Cadeira'
produto['Meu nome'] = 'Lucas'
produto.preco = 20
produto.sereiDeletado = 'DELETE'

console.log(produto);
console.log(produto.preco);

//Deletar uma propriedade
delete produto.sereiDeletado
console.log(produto);

//objeto complexo - time 2:43

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Lucas',
        idade: 20,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 20
        }
    },
    condutores: [{
        nome: 'Duda',
        idade: 20
    }, {
        nome: 'Gabi',
        idade: 20
    }],
    calcularValorSeguro: function() {
        //......
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro);

carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro);

//Deletar dados
delete carro.proprietario.endereco
delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro);