//Iremos ver um recurso que foi adicionado no ECMAScript 2015

//Estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1 // caso o valor não seja definido a assume valor 1
    b = b || 1
    c = c || 1

    return a + b + c
}

//Casos
console.log(soma1()); //3
console.table(soma1(1, 2, 3)); //6
console.log(soma1(0, 0, 0)); //3

console.log('\n');

//Estrategia 2,3,4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //Operador Ternário
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //A função isNAN() determina se o valor é NaN ou não | MAIS SEGURA !!!

    return a + b + c
}

//Casos
console.log(soma2()); //3
console.table(soma2(1, 2, 3)); //6
console.log(soma2(0, 0, 0)); //0

console.log('\n');

//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

//Casos
console.log(soma1()); //3
console.table(soma1(1, 2, 3)); //6
console.log(soma1(0, 0, 0)); //3