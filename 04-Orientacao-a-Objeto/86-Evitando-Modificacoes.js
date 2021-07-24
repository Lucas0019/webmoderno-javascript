// Object.preventDefault(); - previni que o objeto não seja extendido
const product = Object.preventExtensions({
  nome: 'Lucas',
  idade: 21,
  job: 'Developer'
})

console.log('Extensivel: ', Object.isExtensible(product)); // false

product.nome = 'Xavier' // é alterado
product.descripcion = 'Front end developer' // Não poder add informações
delete product.job // pode deletar

console.log(product);

// Object.seal() - não consegue adiconar ou excluir novos atributos
const people = { nome: 'Lucas', idade: 21 }
Object.seal(people)

console.log('Selado: ', Object.isSealed(people)); // true

people.sobrenome = 'Xavier'
people.job = 'Developer'
delete people.nome
people.idade = 25
console.log(people);

// Object.freeze() - selado e os valores são constantes
