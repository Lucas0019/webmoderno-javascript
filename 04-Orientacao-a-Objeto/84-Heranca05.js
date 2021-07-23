console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Toda função tem um atributo chamado prototype
// Este atributo é um objeto que contém todas as propriedades e métodos da função
// Este objeto é chamado de protótipo
// O protótipo é um objeto que contém todas as propriedades e métodos da função

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

Array.prototype.first = function() {
    return this[0];
}

String.prototype.toString = function() {
    return "Man não faz isso, na boa";
}


console.log("Dracula".reverse()); // "ladulaD"
console.log([1, 2, 3, 4, 5].first()); // 1
console.log(['a', 'b', 'c', 'd', ''].first()); // 'a'
console.log('Não funfa'.reverse()); // 'afunfa');

