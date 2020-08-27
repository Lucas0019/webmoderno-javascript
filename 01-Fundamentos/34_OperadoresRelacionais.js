//Um operador relacional compara seus operando e retorna um valor booleano baseado em se a comparação é verdadeira.

console.log('01)', '1' == 1); // dois iguais representa que está verificando a igualdade, nesse caso estou verificando o VALOR e Não o tipo
console.log('02)', '1' === 1); // Trẽs iguais verifica se o valor é estritamente igual, nessa caso NÂo , é falso
console.log('03)', '3' != 3); // Em javascript != , representa a verificação da diferença, nesse caso a questão é '3 ' é diferente de 3
console.log('04)', '3' !== 3); // Verificando a diferença de tipo e valor

console.log('05)', '4' > 2); // Maior que 
console.log('06)', '4' < 2); //Menor que
console.log('07)', '4' <= 2); //Maior ou Igual
console.log('08)', '4' >= 2); // Menor Igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2); // Aqui estamos comparando se a d1 é igual a d2
console.log('10)', d1 === d2); // Aqui estamos comparando se a d1 é igual a d2
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);