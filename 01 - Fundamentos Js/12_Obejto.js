/** 
 *observação
 * Um par de [] representa um array 
 * um par de {} representa um objeto
 *
 * objeto em JavaScript é um conjunto de chave valores
 * criando objeto de forma literal
 */

const prod1 = {}
prod1.nome = "Lucas Xavier"
prod1.idade = 20
prod1['desenvolvo'] = 'Estudo em Progresso' // evitar atributos com espaço

console.log(prod1)
    //dentro de um objeto vocẽ pode ter um identificador único


//Outra Maneira de criar um objeto 
const prod2 = {
    Nome: "Camisa Polo",
    preço: 25.58,
    Tamanho: 40,
    cor: 'Preto'
}

console.log(prod2)