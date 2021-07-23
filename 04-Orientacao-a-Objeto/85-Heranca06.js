// Operador New, serve para estender um objeto da classe Aula usada 
// no construtor da classe Aula. 

function Aula(nome, videID) {
  this.nome = nome;
  this.videID = videID;
}

const aula01 = new Aula('Bem vindo', 123)
const aula02 = new Aula('Até mais', 456)

console.log(aula01, aula02);

// Simulando o operador new para estender a classe Aula
function newAula(f, ...params) {
  const obj = {}

  obj.__proto__ = f.prototype;
  f.apply(obj, params);

  return obj;
}

const aula3 = newAula(Aula, 'Front end', 123)
const aula4 = newAula(Aula, 'Back end', 456)
console.log(aula3, aula4);