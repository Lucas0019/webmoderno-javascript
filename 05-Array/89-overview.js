// o Array em js é um objeto que tem característica de array  e pode ser iterado

const fruits = ['apple', 'orange', 'banana', 'mango'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.sort());

// Forma  de iniciar um Array
let aprovados = new Array('Lucas', 'Duda', 'Bruna');
console.log(aprovados); 

// Forma de iniciar um Array mas recomendada
aprovados = [ 'Lucas', 'Duda', 'Bruna' ]
console.log(aprovados); 
console.log(aprovados[3]); // undefined

// Adicionar novos elementos ao array
aprovados[3] = 'Elu';  // usado mais para subistituir um dado
aprovados.push('Carla'); // Add na ultima posição
console.log(aprovados); // [ 'Lucas', 'Duda', 'Bruna', 'Elu', 'Carla' ]

// Ordenando o array - sort()
const ordenaAprovados = aprovados.sort();
console.log(ordenaAprovados); // [ 'Bruna', 'Carla', 'Duda', 'Elu', 'Lucas' ]

// Deletando dado do array
delete aprovados[1]
console.log(aprovados); // [ 'Bruna', 'Elu', 'Lucas', 'Carla' ]);


// Splic() - remove um dado do array e saca ele para outro lugar
// O método splice() altera o conteúdo de uma lista, 
// adicionando novos elementos enquanto remove elementos antigos.
aprovados = [ 'Lucas', 'Duda', 'Bruna' ];

// Ele começa a deletar a para o indice 2
aprovados.splice(1, 2); // Deleta o dado da posição 1)
console.log(aprovados); // ['Lucas']

//Adicionando elementos novos
aprovados.splice(0, 0, 'Carla');
console.log(aprovados);
