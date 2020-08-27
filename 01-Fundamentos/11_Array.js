/**
 * O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': 
 * objetos de alto nível semelhantes a listas.
 */


// Vai ler a quantidade de itens( frutas existentes) no array 
let Frutas = ['Maça', 'Banana', 'Pera'];
console.log(Frutas.length);
// retorna 3

//Acessando os Arrays 
const Notas = [9.2, 7.4, 2.1, 8.7]
console.log(Notas[0], Notas[3])
console.log(Notas[4])


//adicionando uma nota a um index(Posição da variável)
Notas[4] = 6.2
console.log(Notas)
console.log(Notas.length)

// usando o push para adicionar objetos e outros itens 
Notas.push({ id: 3 }, false, null, 'Teste')
console.log(Notas)

// o POP retira o ultimo valor do array e saca ele , ou seja ele perde esse valor 
console.log(Notas.pop())
console.log(Notas)

//Outra forma de tirar do array
delete Notas[0]
console.log(Notas)

//tipo do array, em javascript um array é um objeto
console.log(typeof Notas)