//observação
// Um par de [] representa um array 
// um par de {} representa um objeto

//objeto em JavaScript é um conjunto de chave valores
// criando objeto de forma literal

const prod1 = {}
prod1.nome = "Lucas Xavier"
prod1.idade = 20
prod1['Eu desnvolvo o Front End'] = 'Estudo em Progresso' // evitar atribuitos com espaço

console.log(prod1)
    //dentro de um objeto vc pode ter um identificador unico


//Outra Maneira de criar um objeto 
const prod2 = {
    Nome: "Camisa Polo",
    preço: 25.58,
    Tamanho: 40,
    cor: 'Preto'
}

console.log(prod2)