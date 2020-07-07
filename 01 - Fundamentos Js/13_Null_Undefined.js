//O valor null é um literal em JavaScript que representa um valor nulo ou "vazio" 
//O valor global undefined representa um valor indefinido. Trata-se de um dos tipos primitivos do JavaScript.

let valor // não foi inicializada 
console.log(valor)
    //undefined

valor = null // ausencia de valor
console.log(valor)
    // NULL

//console.log(valor.toSting())
//Cannot read property 'toSting' of null at Object.
//Não pode ler o numero de uma variavel que não tem referencia

const produto = {}
console.log(produto.tamanho)
    //undefined

produto.tamanho = 40
console.log(produto)
    //{ tamanho: 40 }

produto.tamanho = undefined // evite atribuir um undefined
console.log(!!produto.tamanho)
    //delete produto.tamanho
    //false
console.log(produto)
    //{ tamanho: undefined }


produto.tamanho = null // sem tamanho
console.log(!!produto.tamanho)
    //false
console.log(produto)
    //{ tamanho: null }