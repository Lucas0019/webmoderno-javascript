function meuObjeto() {}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();

// Todos os obejtos criados a partir de uma mesma função construtora aponta para o mesmo objeto
console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(meuObjeto.prototype === obj1.__proto__); // true


meuObjeto.prototype.nome = 'Brabo'
meuObjeto.prototype.falar = function() {
  console.log(`O ${this.nome} chegou` );
}

obj1.falar(); // O Brabo chegou

obj2.nome = 'Braba'
obj2.falar(); // O Braba chegou

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Coffe'
obj3.falar()

// Assertivas
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); // true
console.log((new MeuObjeto).__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true;
console.log((new MeuObjeto).__proto__ === Object.prototype); // true
console.log((new MeuObjeto).__proto__ === null); // true
console.log((new MeuObjeto).__proto__ === undefined); // true
