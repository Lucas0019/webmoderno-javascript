//Objetivo da Herança é a reutilização de código
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const fusca = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);// {}
console.log(ferrari.__proto__ === Object.prototype);// true
console.log(fusca.__proto__ === Object.prototype);// true
console.log(Object.prototype.__proto__);// null


meuObjeto = () => { }
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);